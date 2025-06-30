import React from "react";
import { Card as MUICard } from "@mui/material";
import type { CardProps } from "./Card.types";

/**
 * Card Component
 * Wrapper to allow future library swap with minimal impact.
 */

export const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return (
    <MUICard color="primary" {...props}>
      {children}
    </MUICard>
  );
};
