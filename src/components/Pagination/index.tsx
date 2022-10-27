import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Grid,
  Typography,
  Stack,
  Select,
  MenuItem,
  Pagination as MUIPagination,
  PaginationItem,
} from "@mui/material";

import { currency } from "src/utils/helpers";
import * as actions from "src/store/actions/admin-table-list";

const Pagination = (props: any) => {
  const { dataLoad } = props;

  const pagination = useSelector(
    (state: any) => state?.admin_table_list?.pagination
  );
  const dispatch = useDispatch();

  const limitOptions = [10, 20, 30, 40, 50, 100];

  const totalPage = Math.ceil(
    (dataLoad?.rowsTotal || 0) / (pagination?.limit || 10)
  );

  return (
    <Grid container spacing={2} py={3} alignItems="center">
      <Grid item xs={12} md={6} lg={4} alignItems="center">
        <Stack
          spacing={2}
          direction="row"
          alignItems="center"
          width="auto"
          justifyContent={{ xs: "center", md: "unset" }}
        >
          <Typography sx={{ fontSize: ".875rem" }}>
            {dataLoad?.rowsTotal || 0} Reports
          </Typography>
          <Typography sx={{ fontSize: ".875rem" }}>
            Page {pagination?.page || 1}/{totalPage || 1}
          </Typography>
          <Select
            value={pagination?.limit}
            size="small"
            onChange={(e: any) =>
              dispatch(
                actions?.changePagination({
                  ...pagination,
                  limit: e?.target?.value,
                  page: 1,
                })
              )
            }
          >
            {limitOptions.map((i: number) => (
              <MenuItem value={i} key={i}>
                {i}
              </MenuItem>
            ))}
          </Select>
        </Stack>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={4}
        display="flex"
        width="auto"
        alignItems="center"
        justifyContent={{ xs: "center", md: "flex-end", lg: "center" }}
      >
        <MUIPagination
          count={totalPage}
          size="small"
          shape="rounded"
          page={pagination?.page || 1}
          defaultPage={pagination?.page || 1}
          sx={{ display: "flex", justifyContent: "center" }}
          onChange={(_: any, page: any) =>
            dispatch(
              actions?.changePagination({
                ...pagination,
                page,
              })
            )
          }
          renderItem={(item: any) => (
            <PaginationItem
              components={{
                previous: () => <strong>Prev</strong>,
                next: () => <strong>Next</strong>,
              }}
              {...item}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} lg>
        {!dataLoad?.noTotal && (
          <Grid container spacing={2}>
            <Grid item xs={6} lg>
              <Stack textAlign="right">
                <Typography sx={{ fontSize: ".875rem", fontWeight: 600 }}>
                  Subtotal
                </Typography>
                <Typography sx={{ fontSize: ".875rem", fontWeight: 600 }}>
                  Grand&nbsp;Total
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs="auto" lg="auto">
              <Stack sx={{ width: "auto" }} textAlign="right">
                <Typography sx={{ fontSize: ".875rem", fontWeight: 600 }}>
                  {currency.format(dataLoad?.subtotal || 0)}
                </Typography>
                <Typography sx={{ fontSize: ".875rem", fontWeight: 600 }}>
                  {currency.format(dataLoad?.grandTotal || 0)}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default Pagination;
