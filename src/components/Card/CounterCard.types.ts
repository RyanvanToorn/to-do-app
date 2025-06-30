import type { CardProps as WrapperProps } from "./Card.types";

export interface CounterCardProps extends WrapperProps {
  title: string;
  count: number;
}
