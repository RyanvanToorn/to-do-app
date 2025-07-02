import React from "react";
import { Card } from "@mui/material";
import type { CounterCardProps } from "./CounterCard.types";
import Styles from "./Card.module.css";

/**
 * Counter Card Component
 * Intended to act as an additional wrapper to the existing card wrapper, however with unique styling specifically for being used as a counter for the To-dos.
 */

export const CounterCard: React.FC<CounterCardProps> = ({ ...props }) => {
  return (
    <Card className={`${Styles.CounterCard} ${Styles.extendedClass} counter-card`}>
      {props.title}

      {props.count}
    </Card>
  );
};
