import React from "react";
import { Dialog as MUIDialog } from "@mui/material";
import type { DialogProps } from "./Dialog.types";
import Styles from "./Dialog.module.css";

/**
 * Dialog Component
 * Wrapper to allow future library swap with minimal impact.
 */

export const Dialog: React.FC<DialogProps> = ({ children, ...props }) => {
  return (
    <MUIDialog className={`${Styles.Dialog} ${props.extendedClass}`} {...props}>
      {children}
    </MUIDialog>
  );
};
