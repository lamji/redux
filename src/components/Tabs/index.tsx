import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Box, Tabs as MUITabs, Tab as MUITab, Typography } from "@mui/material";

import { ITabs } from "./module.type";
import { StyledContainer } from "./Styled";
import * as actions from "src/store/actions/admin-table-list";

const Tabs = (props: ITabs) => {
  const { dataIn, children } = props;

  const state = useSelector((state: any) => state?.admin_table_list);
  const dispatch = useDispatch();

  // Selected Value
  const selected = state?.tab || dataIn?.initial;

  // Handle Data Out
  const onChange = (_: any, newValue: string) => {
    dispatch(actions?.setTab(newValue)); // return "string value"
  };

  return (
    <StyledContainer {...dataIn?.styles} className="tabs">
      <Box className="header">
        {/* Tab header column */}
        <MUITabs value={selected} onChange={onChange}>
          {(dataIn?.tabs || []).map((i, idx) => (
            <MUITab
              key={i?.value}
              component="span"
              label={i?.label}
              value={i?.value}
              className="tabitem"
            />
          ))}
        </MUITabs>
      </Box>
      {/* Children Component */}
      <Typography component={Box} className="container">
        {children}
      </Typography>
    </StyledContainer>
  );
};

export default Tabs;
