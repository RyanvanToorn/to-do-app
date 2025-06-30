import React from "react";
import { Card } from "./Card";
import type { CardProps } from "./Card.types";

/**
 * To-do Card Component
 * Intended to act as an additional wrapper to the existing card wrapper, however with unique styling specifically for being used as an individual item within the list of To-dos.
 */
interface TodoCardProps extends CardProps {
  title?: string;
  description?: string;
  dueDate?: string;
}

export const TodoCard: React.FC<TodoCardProps> = ({ title, description, dueDate }) => {
  return (
    <Card sx={{ backgroundColor: "#f9f9f9", mb: 2 }}>
      {title}

      {description}

      {dueDate}
    </Card>
  );
};
