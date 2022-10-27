import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const StyledContainer = styled(Box)((props: any) => ({
  ...props?.root,
}));
