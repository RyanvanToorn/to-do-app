import React from "react";
import { AppBar as MUIAppBar } from "@mui/material";
import type { AppBarProps } from "./AppBar.types";
import Styles from "./AppBar.module.css";

/**
 * AppBar Component
 * Wrapper to allow future library swap with minimal impact.
 */

export const AppBar: React.FC<AppBarProps> = ({ children, ...props }) => {
  return (
    <MUIAppBar position="static" color="primary" className={`${Styles.Appbar} ${props.extendedClass}`} {...props}>
      {children}
    </MUIAppBar>
  );
};
