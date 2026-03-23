import Matter from "matter-js";
import type { DynamicBlockItem } from "@/components/sections/dynamicBlocksData.ts";

export const PHYSICS_DEFAULTS = {
  gravX: 0,
  gravY: 1,
  gravityScale: 0.002,
  wallThickness: 64,
  friction: 0.4,
  frictionAir: 0.018,
  density: 0.001,
  restitution: 0.15,
  mouseStiffness: 0.15,
  maxSpeed: 30,
} as const;

/** Safety-net AABB clamp — pushes bodies back if they tunnel past walls. */
export function clampBodiesToContainer(
  bodies: Matter.Body[],
  containerWidth: number,
  containerHeight: number,
): void {
  for (const body of bodies) {
    const { min, max } = body.bounds;
    let nx = body.position.x;
    let ny = body.position.y;
    if (min.x < 0) nx += -min.x;
    if (max.x > containerWidth) nx -= max.x - containerWidth;
    if (min.y < 0) ny += -min.y;
    if (max.y > containerHeight) ny -= max.y - containerHeight;
    if (nx !== body.position.x || ny !== body.position.y) {
      Matter.Body.setPosition(body, { x: nx, y: ny });
      const vx = body.velocity.x;
      const vy = body.velocity.y;
      Matter.Body.setVelocity(body, {
        x: nx !== body.position.x ? vx * -0.3 : vx,
        y: ny !== body.position.y ? vy * -0.3 : vy,
      });
    }
  }
}

/** Cap linear speed to prevent tunneling through walls. */
export function clampBodySpeeds(
  bodies: Matter.Body[],
  maxSpeed: number,
): void {
  for (const body of bodies) {
    const { x, y } = body.velocity;
    const s = Math.hypot(x, y);
    if (s > maxSpeed && s > 0) {
      const k = maxSpeed / s;
      Matter.Body.setVelocity(body, { x: x * k, y: y * k });
    }
  }
}

export type WallSides = {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
};

/** Static edge walls matching the Framer MakeWalls pattern (container-local coords). */
export function createEdgeWalls(
  width: number,
  height: number,
  thickness: number,
  sides: WallSides = {},
): Matter.Body[] {
  const { top = true, bottom = true, left = true, right = true } = sides;
  const walls: Matter.Body[] = [];
  const hw = width / 2;
  const hh = height / 2;

  if (top) {
    walls.push(
      Matter.Bodies.rectangle(hw, -thickness / 2, width + thickness * 2, thickness, {
        isStatic: true,
        friction: 0,
        label: "wall-top",
      }),
    );
  }
  if (bottom) {
    walls.push(
      Matter.Bodies.rectangle(
        hw,
        height + thickness / 2,
        width + thickness * 2,
        thickness,
        { isStatic: true, friction: 0, label: "wall-bottom" },
      ),
    );
  }
  if (left) {
    walls.push(
      Matter.Bodies.rectangle(
        -thickness / 2,
        hh,
        thickness,
        height + thickness * 2,
        { isStatic: true, friction: 0, label: "wall-left" },
      ),
    );
  }
  if (right) {
    walls.push(
      Matter.Bodies.rectangle(
        width + thickness / 2,
        hh,
        thickness,
        height + thickness * 2,
        { isStatic: true, friction: 0, label: "wall-right" },
      ),
    );
  }
  return walls;
}

export function randomBodyCenter(
  containerWidth: number,
  containerHeight: number,
  bodyWidth: number,
  bodyHeight: number,
  pad: number,
): { x: number; y: number } {
  const hw = bodyWidth / 2;
  const hh = bodyHeight / 2;
  const minX = hw + pad;
  const maxX = containerWidth - hw - pad;
  const minY = hh + pad;
  const maxY = containerHeight - hh - pad;
  return {
    x: minX + Math.random() * Math.max(0, maxX - minX),
    y: minY + Math.random() * Math.max(0, maxY - minY),
  };
}

/** One dynamic body per block — circles vs chamfered pill vs rectangle. */
export function createBlockBody(
  item: DynamicBlockItem,
  width: number,
  height: number,
  x: number,
  y: number,
): Matter.Body {
  const opts = {
    friction: PHYSICS_DEFAULTS.friction,
    frictionStatic: 0.6,
    frictionAir: PHYSICS_DEFAULTS.frictionAir,
    density: PHYSICS_DEFAULTS.density,
    restitution: PHYSICS_DEFAULTS.restitution,
    label: item.id,
    sleepThreshold: 40,
  };

  if (item.blockStyle === "circle") {
    const r = Math.min(width, height) / 2;
    return Matter.Bodies.circle(x, y, r, opts);
  }

  if (item.blockStyle === "pill") {
    return Matter.Bodies.rectangle(x, y, width, height, {
      ...opts,
      chamfer: { radius: Math.min(width / 2, height / 2, 100) },
    });
  }

  if (item.blockStyle === "rect") {
    return Matter.Bodies.rectangle(x, y, width, height, {
      ...opts,
      chamfer: { radius: 16 },
    });
  }

  return Matter.Bodies.rectangle(x, y, width, height, opts);
}
