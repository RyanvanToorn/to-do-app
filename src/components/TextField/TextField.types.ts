import type { TextFieldProps as MUITextFieldProps } from "@mui/material";
import type { StandardProps } from "types_shared/common.types";

export interface TextFieldProps extends MUITextFieldProps<"standard">, StandardProps {}
