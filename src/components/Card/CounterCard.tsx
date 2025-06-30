import React from "react";
import { Card } from "@mui/material";
import type { CardProps } from "./Card.types";

/**
 * Counter Card Component
 * Intended to act as an additional wrapper to the existing card wrapper, however with unique styling specifically for being used as a counter for the To-dos.
 */

interface CounterCardProps extends CardProps {
  title: string;
  description?: string;
  dueDate?: string;
}

export const CounterCard: React.FC<CounterCardProps> = ({ title, description, dueDate }) => {
  return (
    <Card sx={{ backgroundColor: "#f9f9f9", mb: 2 }}>
      {title}

      {description}

      {dueDate}
    </Card>
  );
};
