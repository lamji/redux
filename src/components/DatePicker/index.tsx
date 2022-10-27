import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { IconButton, InputAdornment, TextField } from "@mui/material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Close from "@mui/icons-material/Close";

import * as actions from "src/store/actions/admin-table-list";

const DatePicker = (props: any) => {
  const { data } = props;

  const dispatch = useDispatch();
  const name = data?.name || "Date Picker";

  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);

  const handleChange = (newValue: any) => {
    const value = newValue ? newValue.format("YYYY-MM-DD") : null;
    const key = data?.key || data?.name;
    setValue(newValue);
    dispatch(actions.setFilter({ [key]: value }));
  };

  const handleRemove = () => {
    dispatch(actions?.removeFilterCheckbox(data));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DesktopDatePicker
        open={open}
        onClose={() => setOpen(false)}
        clearable
        label={name}
        inputFormat="MM/DD/yyyy"
        value={value}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth
            onClick={() => setOpen(true)}
            InputProps={{
              ...params?.InputProps,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleRemove}>
                    <Close />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
