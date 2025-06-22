import type { CSSProperties } from "react";

export interface TitleProps {
  title: string;
  isVisible: boolean;
  extendedClass: string;
  inlineStyles?: CSSProperties;
}
