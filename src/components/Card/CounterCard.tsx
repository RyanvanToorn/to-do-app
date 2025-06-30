import React from "react";
import { Card } from "@mui/material";
import type { CounterCardProps } from "./CounterCard.types";

/**
 * Counter Card Component
 * Intended to act as an additional wrapper to the existing card wrapper, however with unique styling specifically for being used as a counter for the To-dos.
 */

export const CounterCard: React.FC<CounterCardProps> = ({ title, count }) => {
  return (
    <Card sx={{ backgroundColor: "#f9f9f9", mb: 2 }}>
      {title}

      {count}
    </Card>
  );
};
