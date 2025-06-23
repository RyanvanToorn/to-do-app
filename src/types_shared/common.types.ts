import type { CSSProperties } from "react";

// Common props I'd like all components to utilize - but with defaults and not mandatory
export interface StandardProps {
  isVisible?: boolean;
  extendedClass?: string;
  inlineStyles?: CSSProperties;
}
