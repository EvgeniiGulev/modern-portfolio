import { useLayoutEffect, useRef, useState } from "react";
import Matter from "matter-js";
import {
  clampBodiesToContainer,
  clampBodySpeeds,
  createBlockBody,
  createEdgeWalls,
  PHYSICS_DEFAULTS,
  randomBodyCenter,
} from "@/lib/physics/matterScene.ts";
import {
  DYNAMIC_BLOCKS_DATA,
  type DynamicBlockItem,
  type DynamicBlockStyle,
} from "./dynamicBlocksData.ts";

const styleClass: Record<DynamicBlockStyle, string> = {
  pill: "dynamic-block-pill",
  rect: "dynamic-block-rect",
  circle: "dynamic-block-circle",
};

function BlockImage({
  item,
}: {
  item: DynamicBlockItem;
}) {
  const isCircle = item.blockStyle === "circle";
  const iconW = item.imageWidth ?? (isCircle ? 40 : 36);
  const iconH = item.imageHeight ?? (isCircle ? 40 : 36);
  const sizeW = `calc(${iconW}px * var(--dynamic-block-scale, 1))`;
  const sizeH = `calc(${iconH}px * var(--dynamic-block-scale, 1))`;

  return (
    <img
      src={item.imageSrc ?? ""}
      alt=""
      className={`shrink-0 object-contain ${isCircle ? "dynamic-block-circle-icon" : "dynamic-block-inline-icon"}`}
      style={
        isCircle
          ? {
              width: sizeW,
              height: sizeH,
              maxWidth: "60%",
              maxHeight: "60%",
            }
          : {
              width: sizeW,
              height: sizeH,
            }
      }
      aria-hidden
    />
  );
}

function BlockContent({ item }: { item: DynamicBlockItem }) {
  const cls = styleClass[item.blockStyle];

  if (item.blockStyle === "circle") {
    return (
      <div className={cls}>
        {item.imageSrc ? (
          <BlockImage item={item} />
        ) : (
          <span className="max-w-full truncate font-mono text-[11px] uppercase tracking-wide text-subtle">
            {item.text || "○"}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`${cls} inline-flex flex-nowrap items-center gap-3`}>
      {item.text ? (
        <span className="whitespace-nowrap">{item.text}</span>
      ) : null}
      {item.imageSrc ? (
        <BlockImage item={item} />
      ) : null}
    </div>
  );
}

export const DynamicBlocks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  /** Bumps when play area size changes so Matter bodies match measured DOM after fluid CSS resize */
  const [physicsLayoutKey, setPhysicsLayoutKey] = useState(0);
  const lastContainerSize = useRef({ w: 0, h: 0 });
  const resizePrimed = useRef(false);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let t: ReturnType<typeof setTimeout> | undefined;
    const ro = new ResizeObserver(([entry]) => {
      const w = Math.round(entry.contentRect.width);
      const h = Math.round(entry.contentRect.height);
      if (
        w === lastContainerSize.current.w &&
        h === lastContainerSize.current.h
      ) {
        return;
      }
      lastContainerSize.current = { w, h };
      if (!resizePrimed.current) {
        resizePrimed.current = true;
        return;
      }
      if (t) clearTimeout(t);
      t = setTimeout(() => setPhysicsLayoutKey((k) => k + 1), 120);
    });
    ro.observe(container);
    return () => {
      if (t) clearTimeout(t);
      ro.disconnect();
    };
  }, []);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const n = DYNAMIC_BLOCKS_DATA.length;
    const dims: { w: number; h: number }[] = [];
    for (let i = 0; i < n; i++) {
      const el = blockRefs.current[i];
      if (!el) return;
      const r = el.getBoundingClientRect();
      dims.push({ w: r.width, h: r.height });
    }

    const cw = container.clientWidth;
    const ch = container.clientHeight;
    if (cw < 40 || ch < 40) return;

    /** Mirrors `:root { --dynamic-block-scale: clamp(0.5, …) }` — used for wall padding */
    const blockScale = Math.min(1.28, Math.max(0.5, window.innerWidth / 1920));
    const pad = Math.max(8, Math.round(12 * blockScale));

    const engine = Matter.Engine.create({
      enableSleeping: true,
      positionIterations: 10,
      velocityIterations: 8,
      constraintIterations: 4,
      gravity: {
        x: PHYSICS_DEFAULTS.gravX,
        y: PHYSICS_DEFAULTS.gravY,
        scale: PHYSICS_DEFAULTS.gravityScale,
      },
    });

    const walls = createEdgeWalls(cw, ch, PHYSICS_DEFAULTS.wallThickness, {
      top: true,
      bottom: true,
      left: true,
      right: true,
    });
    Matter.Composite.add(engine.world, walls);

    const bodies: Matter.Body[] = [];
    for (let i = 0; i < n; i++) {
      const item = DYNAMIC_BLOCKS_DATA[i];
      const { w, h } = dims[i];
      const { x, y } = randomBodyCenter(cw, ch, w, h, pad);
      const body = createBlockBody(item, w, h, x, y);
      bodies.push(body);
    }
    Matter.Composite.add(engine.world, bodies);

    const mouse = Matter.Mouse.create(container);

    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: PHYSICS_DEFAULTS.mouseStiffness,
        damping: 0.1,
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (mouseConstraint.constraint as any).angularStiffness = 0;
    Matter.Composite.add(engine.world, mouseConstraint);

    const mouseWithInput = mouse as Matter.Mouse & {
      mouseup: (event: Event) => void;
    };
    const releaseDrag = (event: Event) => {
      if (mouseWithInput.button !== -1) mouseWithInput.mouseup(event);
    };
    container.addEventListener("mouseleave", releaseDrag);
    container.addEventListener("pointerleave", releaseDrag);
    container.addEventListener("pointercancel", releaseDrag);
    window.addEventListener("pointerup", releaseDrag);
    window.addEventListener("mouseup", releaseDrag);

    const syncDom = () => {
      for (let i = 0; i < bodies.length; i++) {
        const body = bodies[i];
        const el = blockRefs.current[i];
        if (!el) continue;
        el.style.visibility = "visible";
        el.style.left = `${body.position.x}px`;
        el.style.top = `${body.position.y}px`;
        el.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
      }
    };

    const onAfterUpdate = () => {
      clampBodySpeeds(bodies, PHYSICS_DEFAULTS.maxSpeed);
      clampBodiesToContainer(bodies, cw, ch);
      syncDom();
    };

    Matter.Events.on(engine, "afterUpdate", onAfterUpdate);

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    return () => {
      container.removeEventListener("mouseleave", releaseDrag);
      container.removeEventListener("pointerleave", releaseDrag);
      container.removeEventListener("pointercancel", releaseDrag);
      window.removeEventListener("pointerup", releaseDrag);
      window.removeEventListener("mouseup", releaseDrag);
      Matter.Events.off(engine, "afterUpdate", onAfterUpdate);
      Matter.Runner.stop(runner);
      Matter.Composite.remove(engine.world, mouseConstraint);
      Matter.World.clear(engine.world, false);
      Matter.Engine.clear(engine);
      Matter.Mouse.clearSourceEvents(mouse);
    };
  }, [physicsLayoutKey]);

  return (
    <div className="grid w-full min-h-0 grid-cols-1 grid-rows-[1fr]">
      <div
        ref={containerRef}
        className="relative h-[clamp(220px,calc(390px*var(--dynamic-block-scale)),520px)] w-full touch-none overflow-visible bg-canvas select-none"
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
      >
        {DYNAMIC_BLOCKS_DATA.map((item, i) => (
          <div
            key={item.id}
            ref={(el) => {
              blockRefs.current[i] = el;
            }}
            className="absolute left-0 top-0 z-10 cursor-grab will-change-transform active:cursor-grabbing"
            style={{ visibility: "hidden" }}
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
          >
            <BlockContent item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
