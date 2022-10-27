import React, { Fragment, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DateRangePicker as MUIDateRange } from "react-date-range";

import {
  TextField,
  Popover,
  Typography,
  Box,
  Grid,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Close from "@mui/icons-material/Close";

import { Button } from "src/components";

import * as actions from "src/store/actions/admin-table-list";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import moment from "moment";

const DateRangePicker = (props: any) => {
  const { data } = props;

  const state = useSelector((state: any) => state?.admin_table_list?.filters);
  const dispatch = useDispatch();
  const inputRef = useRef();
  const name = data?.name || "Date Range Picker";
  const fieldValue = state?.[data?.key]?.[1]
    ? `${state?.[data?.key]?.[0]} - ${state?.[data?.key]?.[1]}`
    : "";

  const [showPopOver, setShowPopOver] = useState<Boolean>(false);
  const [value, setValue] = useState<any>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleClick = (event: any) => {
    setShowPopOver(true);
  };

  const handleClose = () => {
    setShowPopOver(false);
  };

  const handleChange = (newValue: any) => {
    const selection = newValue?.selection;
    setValue([selection]);
  };

  const handleSubmit = () => {
    const selection = value?.[0];

    const result = [
      moment(selection?.startDate).format("YYYY-MM-DD"),
      moment(selection?.endDate).format("YYYY-MM-DD"),
    ];

    const key = data?.key || data?.name;
    dispatch(actions.setFilter({ [key]: result }));
    handleClose();
  };

  const handleRemove = () => {
    dispatch(actions?.removeFilterCheckbox(data));
  };

  const open = Boolean(showPopOver);
  const id = open ? "date-range-picker" : undefined;

  return (
    <Fragment>
      <TextField
        inputRef={inputRef}
        fullWidth
        label={name}
        value={fieldValue}
        inputProps={{ readOnly: true }}
        onClick={handleClick}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleRemove}>
                <Close />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={inputRef.current}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography component={Box} py={2}>
          <MUIDateRange
            onChange={handleChange}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={value}
            direction="horizontal"
          />
        </Typography>

        <Grid container spacing={1} p={2}>
          <Grid item xs sm md lg xl />
          <Grid item>
            <Button
              dataIn={{
                label: "Cancel",
                action: handleClose,
                styles: {
                  buttonroot: {
                    background: "#F1F1F1",
                    color: "#232323",
                  },
                },
              }}
            />
          </Grid>
          <Grid item>
            <Button
              dataIn={{
                label: "Set Range",
                action: handleSubmit,
                styles: {},
              }}
            />
          </Grid>
        </Grid>
      </Popover>
    </Fragment>
  );
};

export default DateRangePicker;
