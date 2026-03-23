export type DynamicBlockStyle = "pill" | "circle" | "rect";

import arrowDownIcon from "@/assets/icons/arrow-down.svg";
import starIcon from "@/assets/icons/star.svg";
import dotIcon from "@/assets/icons/dot.svg";

export type DynamicBlockItem = {
  id: string;
  text: string;
  blockStyle: DynamicBlockStyle;
  imageSrc: string | null;
  imageWidth?: number;
  imageHeight?: number;
};

export const DYNAMIC_BLOCKS_DATA: DynamicBlockItem[] = [
  { id: "pill-a", text: "Frontend Developer", blockStyle: "pill", imageSrc: null },
  { id: "pill-b", text: "UI ENGINEER", blockStyle: "pill", imageSrc: null },
  { id: "rect-a", text: "Gu1ev", blockStyle: "rect", imageSrc: null },
  { id: "rect-b", text: "200 OK", blockStyle: "rect", imageSrc: dotIcon, imageWidth: 36, imageHeight: 36 },
  { id: "circle-a", text: "", blockStyle: "circle", imageSrc: arrowDownIcon, imageWidth: 38, imageHeight: 38 },
  { id: "circle-b", text: "", blockStyle: "circle", imageSrc: starIcon, imageWidth: 38, imageHeight: 38 },
];
