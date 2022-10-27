import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";

import { StyledDataGrid } from "./Styled";
import { Pagination, ActionBar } from "src/components";
import * as actions from "src/store/actions/admin-table-list";

const Table = (props: any) => {
  const { dataLoad, dataIn } = props;

  const state = useSelector((state: any) => state?.admin_table_list);
  const dispatch = useDispatch();
  const hasRow = Boolean((dataLoad?.rows || []).length);

  const [showMenu, setShowMenu] = useState<any>();
  const [row, setRow] = useState<any>();

  // set element to place menus itself
  const handleClick = (e: any) => {
    setShowMenu(e.currentTarget);
  };

  // delete element and close menus
  const handleClose = () => {
    setShowMenu(null);
  };

  // Data out of Sort & Order
  const onSort = (model: any) => {
    const values = (model || [])?.length
      ? { sort: model?.[0]?.field, order: model?.[0]?.sort }
      : { sort: "", order: "" };
    dispatch(actions?.sortColumns(values));
  };

  // Data out of Selection Checkbox
  const onSelect = (model: any) => {
    let values: any = model;
    let rowsData: any = [];

    const selectionKey = dataIn?.selectionKey;
    if (selectionKey) {
      const rows: any = model?.map((i: any) => {
        const item = (dataLoad?.rows || []).find((r: any) => i === r?.id);
        return item;
      });
      values = (rows || []).map((i: any) => i[selectionKey]);
      rowsData = rows;
    }

    dispatch(actions?.setSelection(values));
    dispatch(actions?.setSelectionData(rowsData));
    dispatch(actions?.setCheckbox(model));
  };

  const columns: any[] = (dataIn?.rowActions || [])?.length
    ? [
        ...dataIn?.columns,
        {
          field: "action",
          headerName: "",
          sortable: false,
          width: 60,
          hideable: true,
          renderHeader: () => (
            <Box pl={1}>
              <AddLocationIcon />
            </Box>
          ),
          renderCell: (params: any) => (
            <IconButton
              onClick={(e: any) => {
                handleClick(e);
                setRow(params?.row || []);
              }}
            >
              <MoreHorizIcon />
            </IconButton>
          ),
        },
      ]
    : dataIn?.columns || [];

  return (
    <Box px={3} py={2} className="table-container">
      <ActionBar actionBars={dataIn?.actionBars} />

      <StyledDataGrid
        id="admin-table-list"
        className="admin-table-list"
        autoHeight={hasRow}
        sx={{ height: "500px" }}
        checkboxSelection
        hideFooter
        density="comfortable"
        sortingMode="server"
        disableColumnFilter
        disableColumnMenu
        disableSelectionOnClick
        onSortModelChange={onSort}
        onSelectionModelChange={onSelect}
        selectionModel={state?.checkbox || []}
        rows={dataLoad?.rows || []}
        columns={columns}
        components={{
          NoRowsOverlay: () => (
            <Stack
              height="100%"
              alignItems="center"
              justifyContent="center"
              spacing={1}
              p={2}
            >
              <ArticleRoundedIcon
                sx={{ fontSize: "5rem", color: "darkgray" }}
              />
              <Typography
                sx={{
                  color: "darkgray",
                  fontSize: ".875rem",
                  fontWeight: "600",
                }}
              >
                No Data Found !
              </Typography>
            </Stack>
          ),
        }}
        sortingOrder={["asc", "desc"]}
        {...dataIn?.overrideProps}
      />

      <Pagination
        dataLoad={{
          noTotal: dataIn?.noTotal,
          rowsTotal: dataLoad?.rowsTotal,
          subtotal: dataLoad?.subtotal,
          grandTotal: dataLoad?.grandTotal,
        }}
      />
      {/* Row Actions Menus */}
      <Menu
        id="table-row-action"
        anchorEl={showMenu}
        open={Boolean(showMenu)}
        onClose={handleClose}
      >
        {(dataIn?.rowActions || []).map((o: any, idx: number) => {
          const oProps = (o?.otherProps && o?.otherProps(row)) || {};
          return (
            <Box
              component="label"
              key={idx}
              onClick={() => {
                // default
                o?.action(row);
                if (o?.autoClose) {
                  handleClose();
                }
              }}
            >
              <MenuItem {...oProps}>{o?.label}</MenuItem>
              {o?.divider && <Divider />}
            </Box>
          );
        })}
      </Menu>
    </Box>
  );
};

export default Table;
