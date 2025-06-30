import type { CardProps as MUICardProps } from "@mui/material/Card";
import type { StandardProps } from "types_shared/common.types";

export interface CardProps extends MUICardProps, StandardProps {
  test?: string;
}
