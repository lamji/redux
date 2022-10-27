import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const StyledContainer = styled(Box)((props: any) => ({
  ...props?.root,
  zIndex: 3,
  position: "fixed",
  width: "100%",
  left: 0,
  top: "110px",
  display: "grid",
  placeContent: "center",

  ".main": {
    pointerEvents: "auto",
    zIndex: "9999 !important",
    width: "max-content",
    background: "#FCFCFC",
    boxShadow:
      "0px 30px 84px rgba(19, 10, 46, 0.08), 0px 8px 32px rgba(19, 10, 46, 0.07), 0px 3px 14px rgba(19, 10, 46, 0.03), 0px 1px 3px rgba(19, 10, 46, 0.13)",
    borderRadius: "5px",
    padding: "5px 20px",
  },

  ".count": {
    color: "#00bcd4",
    fontWeight: 500,
    fontSize: "0.9rem !important",
  },

  ".buttontext": {
    color: "#232323",
    fontWeight: 500,
    fontSize: "0.9rem !important",
    textTransform: "capitalize",
  },
}));
