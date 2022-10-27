import React from "react";
import { useSelector } from "react-redux";

import { Box, Grid } from "@mui/material";

import { AutoComplete, DatePicker } from "src/components";
import DateRangePicker from "../DateRangePicker";

const FilterList = (props: any) => {
  const { dataLoad } = props;

  const state = useSelector((state: any) => state?.admin_table_list);

  const fields = state?.filterCheckbox;

  return (
    <Box p="10px" className="filter-list-container">
      <Grid container spacing={2}>
        {fields?.map((i: any, idx: number) => {
          const key = `${idx}-${i?.name}`;
          switch (i?.type) {
            case "select":
              return (
                <Grid item xs={12} lg={3} key={key}>
                  <AutoComplete data={i} options={dataLoad?.[i?.name] || []} />
                </Grid>
              );
            case "date":
              return (
                <Grid item xs={12} lg={3} key={key}>
                  <DatePicker data={i} />
                </Grid>
              );
            case "daterange":
              return (
                <Grid item xs={12} lg={3} key={key}>
                  <DateRangePicker data={i} />
                </Grid>
              );
            default:
              return (
                <Grid item xs={12} lg={3} key={key}>
                  <AutoComplete data={i} options={dataLoad?.[i?.name] || []} />
                </Grid>
              );
          }
        })}
      </Grid>
    </Box>
  );
};

export default FilterList;
