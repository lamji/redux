import { styled } from "@mui/system";

export const StyledErrorBoundary = styled("div")`
  position: relative;
  width: 100%;
  height: 100%;

  .container {
    padding: 20px;
    background-color: #fff4e5;
    border-radius: 10px;
    color: #876431;
  }

  .name {
    font-weight: 600;
  }
`;
