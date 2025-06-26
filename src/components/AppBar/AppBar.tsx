import React from "react";
import { AppBar as MUIAppBar } from "@mui/material";
import type { AppBarProps } from "./AppBar.types";

/**
 * AppBar Component
 * Wrapper to allow future library swap with minimal impact.
 */

const AppBar: React.FC<AppBarProps> = ({ children, ...props }) => {
  return (
    <MUIAppBar color="primary" {...props}>
      {children}
    </MUIAppBar>
  );
};

export default AppBar;
