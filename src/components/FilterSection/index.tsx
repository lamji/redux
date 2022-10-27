import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Grid, InputAdornment, TextField } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import { Button, Dropdown } from "src/components";

import { StyledContainer } from "./Styled";

import * as actions from "src/store/actions/admin-table-list";

var searchTimeout: any = null;
const FilterSection = (props: any) => {
  const { dataIn } = props;

  const searchText = useSelector(
    (state: any) => state?.admin_table_list?.searchText
  );
  const dispatch = useDispatch();

  const filterProps = dataIn?.filterProps;
  const actionProps = dataIn?.actionProps;
  const searchProps = dataIn?.searchProps;
  const redirectionProps = dataIn?.redirectionProps;

  const filterOptions = filterProps?.options || [];

  // Handle Enter Key for search field
  const onKeyUp = (e: any) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      const value = e?.target?.value;
      clearTimeout(searchTimeout);
      dispatch(actions?.setSearchText(value));
      if (value?.length >= (searchProps?.string || 3) || !value?.length)
        dispatch(actions?.setFilter({ search: value }));
    }
  };

  // Handle change value of search field
  const onChange = (e: any) => {
    e.preventDefault();
    const value = e?.target?.value;
    clearTimeout(searchTimeout);
    dispatch(actions?.setSearchText(value));
    searchTimeout = setTimeout(() => {
      if (value?.length >= (searchProps?.string || 3) || !value?.length)
        dispatch(actions?.setFilter({ search: value }));
    }, 1000);
    return;
  };

  return (
    <StyledContainer {...dataIn?.styles} className="filtersection">
      <Grid container spacing={2} className="container" alignItems="center">
        {/* Filter Button */}
        {(filterProps?.show ?? true) && (
          <Grid item xs={12} lg="auto" md="auto">
            <Dropdown
              dataIn={{
                icons: filterProps?.icons || {},
                label: filterProps?.label || "",
                checkbox: true,
                options: filterOptions || [],
                styles: dataIn?.styles,
              }}
            />
          </Grid>
        )}
        {/* Search Field */}
        {(searchProps?.show ?? true) && (
          <Grid item xs={12} lg md sm>
            <TextField
              sx={{ ...dataIn?.styles?.searchfield }}
              className="searchfield"
              variant="standard"
              fullWidth
              autoFocus
              value={searchText || ""}
              onKeyUp={onKeyUp}
              onChange={onChange}
              placeholder={searchProps?.placeholder || "Search"}
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        )}
        {/* More Actions Button */}
        {(actionProps?.show ?? true) && (
          <Grid item xs={12} lg="auto" md="auto">
            <Dropdown
              dataIn={{
                autoClose: actionProps?.autoClose, //added to autoclose dropdown
                icons: actionProps?.icons || {},
                label: actionProps?.label || "",
                checkbox: false,
                options: actionProps?.options || [],
                styles: dataIn?.styles,
              }}
            />
          </Grid>
        )}
        {/* Redirection Button */}
        {(redirectionProps?.show ?? true) && (
          <Grid item xs={12} lg="auto" md="auto">
            <Button
              dataIn={{
                icons: redirectionProps?.icons || {},
                label: redirectionProps?.label || "",
                action: redirectionProps?.action,
                styles: dataIn?.styles,
              }}
            />
          </Grid>
        )}
      </Grid>
    </StyledContainer>
  );
};

export default FilterSection;
