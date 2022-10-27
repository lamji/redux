import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const StyledContainer = styled(Box)((props: any) => ({
  ...props?.tabs,
  background: props?.tabs?.background || "#fff",
  borderRadius: props?.tabs?.borderRadius || "5px",

  ".header": {
    ...props?.header,
    borderBottom: props?.header?.borderBottom || "1px solid",
    borderColor: props?.header?.borderColor || "#0000001f",
  },

  ".tabitem": {
    ...props?.tabitem,
    textTransform: props?.tabitem?.textTransform || "capitalize",
  },

  ".container": {
    ...props?.container,
    borderBottomLeftRadius: props?.container?.borderBottomLeftRadius || "5px",
    borderBottomRightRadius: props?.container?.borderBottomRightRadius || "5px",
    padding: props?.container?.padding || "10px",
  },
}));
