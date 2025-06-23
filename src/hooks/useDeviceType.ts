import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import type { DeviceType } from "../types_shared/common.types";

export function useDeviceType(): DeviceType {
  const theme = useTheme();

  const isMobile: boolean = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet: boolean = useMediaQuery(theme.breakpoints.between("sm", "md"));
  //If neither of the above, then assume desktop/pc

  if (isMobile) return "mobile";
  if (isTablet) return "tablet";
  return "desktop";
}
