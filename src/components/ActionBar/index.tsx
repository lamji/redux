import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box, Stack, Button, IconButton, Fade } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import { StyledContainer } from "./Styled";
import * as actions from "src/store/actions/admin-table-list";

const ActionBar = (props: any) => {
  const { actionBars } = props;

  const checkbox = useSelector(
    (state: any) => state?.admin_table_list?.checkbox
  );
  const state = useSelector((state: any) => state?.admin_table_list);
  const selection = state?.selection;
  const selectionData = state?.selectionData;
  const count = (checkbox || [])?.length;
  const dispatch = useDispatch();

  function closeCard() {
    dispatch(actions?.removeAllCheckbox());
  }

  return (
    <Fade in={Boolean(checkbox?.length)}>
      <StyledContainer>
        <Box className="main">
          <Stack
            spacing={2}
            direction={{ xs: "column", lg: "row" }}
            alignItems="center"
          >
            <Box className="count" pt={{ xs: 2, lg: 0 }}>
              {count} Item{count > 1 && "s"} Selected
            </Box>
            {(actionBars || [])?.map((item: any, idx: number) => {
              const overrideProps = item?.overrideProps
                ? { ...item?.overrideProps(selectionData) }
                : {};
              return (
                <Button
                  key={idx}
                  variant="text"
                  color="inherit"
                  className="buttontext"
                  disabled={Boolean(item?.disabled)}
                  onClick={() => item?.action(selection)}
                  {...overrideProps}
                >
                  {item?.label}
                </Button>
              );
            })}
            <IconButton aria-label="close" onClick={closeCard}>
              <CloseIcon />
            </IconButton>
          </Stack>
        </Box>
      </StyledContainer>
    </Fade>
  );
};

export default ActionBar;
