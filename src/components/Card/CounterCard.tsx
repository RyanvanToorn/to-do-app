import React from "react";
import { Card } from "../Card";
import type { CounterCardProps } from "./CounterCard.types";
import Styles from "./CounterCard.module.css";

/**
 * Counter Card Component
 * Intended to act as an additional wrapper to the existing card wrapper, however with unique styling specifically for being used as a counter for the To-dos.
 */

export const CounterCard: React.FC<CounterCardProps> = ({ ...props }) => {
  return (
    <Card className={`${Styles.CounterCard} ${Styles.extendedClass} counter-card`}>
      <div className="counter-card__title-row">{props.title}</div>
      <div className="counter-card__count-row">{props.count}</div>
    </Card>
  );
};
