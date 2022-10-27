import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Checkbox,
  CircularProgress,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

import { StyledContainer } from "./Styled";
import * as actions from "src/store/actions/admin-table-list";

const Dropdown = (props: any) => {
  const { dataIn } = props;

  const dispatch = useDispatch();
  const checkbox = useSelector(
    (state: any) => state?.admin_table_list.filterCheckbox
  );

  const [showMenu, setShowMenu] = useState(null);

  // set element to place menus itself
  const handleClick = (e: any) => {
    setShowMenu(e.currentTarget);
  };

  // delete element and close menus
  const handleClose = () => {
    setShowMenu(null);
  };

  const handleCheckbox = (value: any) => {
    const isChecked = checkbox.find((s: any) => s?.name === value?.name);
    if (isChecked) {
      dispatch(actions?.removeFilterCheckbox(value));
      return;
    }
    dispatch(actions?.setFilterCheckbox(value));
  };

  return (
    <Fragment>
      <StyledContainer
        {...dataIn?.styles}
        {...dataIn?.icons}
        onClick={handleClick}
        className="dropdownbutton"
      >
        {dataIn?.label}
      </StyledContainer>
      <Menu
        id="setting-menu"
        anchorEl={showMenu}
        open={Boolean(showMenu)}
        onClose={() => handleClose()}
      >
        {(dataIn?.options || []).map((i: any, idx: number) => {
          const checked = (checkbox || []).find(
            (c: any) => c?.name === i?.name
          );
          return (
            <MenuItem
              key={idx}
              onClick={() => {
                // default
                i?.action ? i?.action(i) : handleCheckbox(i);
                //added to autoclose dropdown
                if (dataIn?.autoClose) {
                  handleClose();
                }
              }}
            >
              <Stack direction="row" alignItems="center">
                {dataIn?.checkbox && (
                  <Checkbox
                    checked={Boolean(checked)}
                    name={i?.name}
                    disableRipple
                    icon={
                      i?.loading ? (
                        <CircularProgress size={23} />
                      ) : (
                        <CheckBoxOutlineBlankIcon />
                      )
                    }
                  />
                )}
                <Typography>{i?.name}</Typography>
              </Stack>
            </MenuItem>
          );
        })}
      </Menu>
    </Fragment>
  );
};

export default Dropdown;
