import type { CSSProperties } from "react";

export interface TitleProps {
  text: string;
  isVisible?: boolean;
  extendedClass?: string;
  inlineStyles?: CSSProperties;
}
