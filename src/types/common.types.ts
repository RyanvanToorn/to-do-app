import type { CSSProperties } from "react";

export interface CommonProps {
  text: string;
  isVisible?: boolean;
  extendedClass?: string;
  inlineStyles?: CSSProperties;
}
