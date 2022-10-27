import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  Autocomplete as MUIAutocomplete,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import Close from "@mui/icons-material/Close";

import * as actions from "src/store/actions/admin-table-list";

const AutoComplete = (props: any) => {
  const { data, options } = props;

  const dispatch = useDispatch();

  const [value, setValue] = useState(null);

  let otherMethod: any = {};
  const name = data?.name;
  const isOptionsObject = typeof (options || [])?.[0] === "object";

  if (isOptionsObject) {
    const testKey: string = Object.keys(options?.[0])?.[0];
    otherMethod = {
      getOptionLabel: (option: any) =>
        (data?.key || []).map((i: string) => option?.[i]).join(" - "),
      isOptionEqualToValue: (o: any, v: any) =>
        (o?.id || o?.[testKey]) === (v?.id || v?.[testKey]),
    };
  }

  const onInputChange = (_: any, newValue: any) => {
    let values;

    if (isOptionsObject) {
      values = (data?.key || []).reduce((acc: any, i: any) => {
        return { ...acc, [i]: newValue?.[i] };
      }, {});
    } else {
      const key = data?.key?.[0] || name;
      values = { [key]: newValue };
    }
    setValue(newValue || null);
    dispatch(actions.setFilter({ ...values }));
  };

  const handleRemove = () => {
    dispatch(actions?.removeFilterCheckbox(data));
  };

  return (
    <MUIAutocomplete
      name={name}
      id={`autocomplete_${name}`}
      sx={{ width: "100%" }}
      value={value}
      options={options}
      onChange={onInputChange}
      disableClearable
      forcePopupIcon={false}
      renderInput={(params) => (
        <TextField
          {...params}
          label={name || "Select something"}
          InputProps={{
            ...params?.InputProps,
            endAdornment: (
              <InputAdornment position="start" sx={{ mr: "4px" }}>
                <IconButton onClick={handleRemove}>
                  <Close />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
      {...otherMethod}
    />
  );
};

export default AutoComplete;
