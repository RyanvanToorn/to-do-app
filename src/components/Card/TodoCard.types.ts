import type { CardProps as WrapperProps } from "./Card.types";

export interface TodoCardProps extends WrapperProps {
  title?: string;
  description?: string;
  dueDate?: string;
}
