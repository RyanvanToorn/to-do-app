import React from "react";
import { Button as MUIButton } from "@mui/material";
import type { ButtonProps } from "./Button.types";
import Styles from "./Button.module.css";

/**
 * Button Component
 * Wrapper to allow future library swap with minimal impact.
 */

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <MUIButton variant="contained" color="primary" className={Styles.Button} {...props}>
      {children}
    </MUIButton>
  );
};

export default Button;
