import React from "react";

import { Stack, Typography, Box, Tooltip } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import { StyledErrorBoundary } from "./Styled";
import { message } from "./message";

interface IErrorBoundary {
  validate: string[];
  inspect: any;
  name: string;
}
const ErrorBoundary = (props: IErrorBoundary) => {
  const { validate, inspect, name } = props;

  return (
    <StyledErrorBoundary>
      <Stack className="container" spacing={1.5}>
        {/* Name */}
        {name ? <Typography className="name">{name}</Typography> : ""}
        {/* Error Content */}
        {validate?.map((i, idx) => (
          <Stack direction="row" spacing={1.5} key={idx}>
            {/* Show Tooltip details of objects */}
            <Tooltip title={<pre>{JSON.stringify(inspect?.[i], null, 2)}</pre>}>
              <HelpOutlineIcon sx={{ color: "#FFA117" }} />
            </Tooltip>
            {/* Constant Message based on missing props */}
            <Typography className="description">{message?.[i]}</Typography>
          </Stack>
        ))}
      </Stack>
    </StyledErrorBoundary>
  );
};

export default ErrorBoundary;
