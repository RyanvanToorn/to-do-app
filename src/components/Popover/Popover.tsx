import React from "react";
import { Popover as MUIPopover } from "@mui/material";
import type { PopoverProps } from "./Popover.types";
import Styles from "./Popover.module.css";

/**
 * Popover Component
 * Wrapper to allow future library swap with minimal impact.
 */

export const Popover: React.FC<PopoverProps> = ({ children, ...props }) => {
  return (
    <MUIPopover className={`${Styles.Popover} ${props.extendedClass}`} {...props}>
      {children}
    </MUIPopover>
  );
};
