import { styled } from "@mui/system";
import { Button } from "@mui/material";

export const StyledContainer = styled(Button)((props: any) => ({
  ...props?.buttonroot,
  background: props?.buttonroot?.background || "#00BCD4",
  borderRadius: props?.buttonroot?.borderRadius || "5px",
  width: props?.buttonroot?.width || "100%",

  color: props?.buttonroot?.color || "#fff",
  padding: props?.buttonroot?.padding || "10px 16px",
  minWidth: props?.buttonroot?.minWidth || "max-content",
  textTransform: props?.buttonroot?.width || "capitalize",

  "&:hover": {
    background: props?.buttonroot?.background || "#0096aa",
  },
}));
