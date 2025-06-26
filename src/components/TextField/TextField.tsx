import React from "react";
import { TextField as MUITextField } from "@mui/material";
import type { TextFieldProps } from "./TextField.types";

/**
 * TextField Component
 * Wrapper to allow future library swap with minimal impact.
 */

const Card: React.FC<TextFieldProps> = ({ ...props }) => {
  return <MUITextField color="primary" {...props}></MUITextField>;
};

export default Card;
