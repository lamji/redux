import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const StyledContainer = styled(Box)((props: any) => ({
  ...props?.filtersection,
  display: props?.filtersection?.display || "flex",
  alignItems: props?.filtersection?.alignItems || "center",

  ".container": {
    ...props?.container,
  },
}));
