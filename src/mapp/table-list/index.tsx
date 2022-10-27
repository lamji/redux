import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Backdrop, CircularProgress, Typography } from "@mui/material";

import { Tabs, Table, FilterSection, FilterList } from "src/components";
import { HOCProvider } from "src/provider";
import { StyledContainer } from "./Styled";
import { IData, ITableList } from "./module.type";
import { DataValidator } from "src/data-validator";
import * as actions from "src/store/actions/admin-table-list";

let debounce: NodeJS.Timeout;
const TableList = (props: ITableList) => {
  const { dataLoad, dataIn, dataOut } = props;

  const state = useSelector((state: any) => state?.admin_table_list);
  const dispatch = useDispatch();
  const tabs: any = dataIn?.tabs || [];

  const filterProps = dataIn?.filterSection?.filterProps;
  const searchProps = dataIn?.filterSection?.searchProps;
  const actionProps = dataIn?.filterSection?.actionProps;
  const redirectionProps = dataIn?.filterSection?.redirectionProps;

  const tableProps = dataIn?.table;
  const selectedFilters = state?.filterCheckbox
    ?.filter((i: any) => i?.type === "select")
    .map((i: any) => i?.name);

  useMemo(() => {
    const valuesOut = {
      filters: state?.filters,
      pagination: {
        page: state?.pagination?.page,
        limit: state?.pagination?.limit,
      },
      sorting: {
        sort: state?.sort?.sort,
        order: state?.sort?.order,
      },
      status: state?.tab || tabs?.[0]?.value || "",
      selection: state?.selection,
      selectionData: state?.selectionData,
      selectedFilters: selectedFilters,
    };

    clearTimeout(debounce);
    debounce = setTimeout(() => {
      dataOut(valuesOut);
    }, 100);
  }, [
    state?.filters,
    state?.pagination,
    state?.sort,
    state?.tab,
    state?.selection,
    JSON.stringify(selectedFilters),
  ]);

  useEffect(() => {
    if (dataIn?.values) {
      dispatch(actions?.setValues({ ...dataIn?.values }));
    }
  }, [dataIn?.values]);

  return (
    <StyledContainer {...dataIn?.styles} className="table-main">
      <Typography mb={2} variant="h6" className="title">
        {dataIn?.title}
      </Typography>

      {/* Loader */}
      <Backdrop
        sx={{ color: "#fff", zIndex: 2000 }}
        open={Boolean(dataIn?.loading)}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Tabs
        dataIn={{
          tabs: tabs || [],
          initial: tabs?.[0]?.value || "",
          styles: dataIn?.styles,
        }}
      >
        <FilterSection
          dataIn={{
            filterProps,
            searchProps,
            actionProps,
            redirectionProps,
            styles: dataIn?.styles,
          }}
        />
        <FilterList dataLoad={dataLoad?.filterList} />
        <Table
          dataLoad={{
            rows: dataLoad?.rows,
            rowsTotal: dataLoad?.rowsTotal,
            subtotal: dataLoad?.subtotal,
            grandTotal: dataLoad?.grandTotal,
          }}
          dataIn={{
            noTotal: tableProps?.noTotal,
            overrideProps: tableProps?.overrideProps,
            actionBars: tableProps?.actionBars,
            columns: tableProps?.columns,
            rowActions: tableProps?.rowActions,
            selectionKey: tableProps?.selectionKey,
            styles: dataIn?.styles,
          }}
        />
      </Tabs>
    </StyledContainer>
  );
};

export default HOCProvider(
  DataValidator(TableList, IData, "MApp - Admin Table View List")
);
