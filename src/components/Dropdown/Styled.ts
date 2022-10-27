import { styled } from "@mui/system";
import { Button } from "@mui/material";

export const StyledContainer = styled(Button)((props: any) => ({
  ...props?.dropdownbutton,
  background: props?.dropdownbutton?.background || "#1C213B",
  borderRadius: props?.dropdownbutton?.borderRadius || "5px",
  width: props?.dropdownbutton?.width || "100%",

  color: props?.dropdownbutton?.color || "#fff",
  padding: props?.dropdownbutton?.padding || "10px 16px",
  minWidth: props?.dropdownbutton?.minWidth || "max-content",
  textTransform: props?.dropdownbutton?.width || "capitalize",

  "&:hover": {
    background: props?.dropdownbutton?.color || "#161a2f",
  },
}));
