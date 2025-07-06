import React from "react";
import { Card } from "./Card";
import type { TodoCardProps } from "./TodoCard.types";
import Styles from "./TodoCard.module.css";

/**
 * To-do Card Component
 * Intended to act as an additional wrapper to the existing card wrapper, however with unique styling specifically for being used as an individual item within the list of To-dos.
 */

export const TodoCard: React.FC<TodoCardProps> = ({ ...props }) => {
  return (
    <Card className={`${Styles.TodoCard} ${props.extendedClass} todo-card`}>
      {props.title}

      {props.description}

      {props.dueDate}
    </Card>
  );
};
