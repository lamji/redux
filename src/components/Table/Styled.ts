import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/system";

export const StyledDataGrid = styled(DataGrid)`
  border: whitesmoke;

  & .MuiDataGrid-columnHeaderCheckbox,
  & .MuiDataGrid-cellCheckbox {
    width: 100%;
    height: 100%;
  }
  & .MuiDataGrid-columnHeaders {
    background-color: white;
    border: none !important;
  }
  & .MuiDataGrid-columnHeader {
    outline: none !important;
    user-select: none;
    text-transform: capitalize;
  }
  & .MuiDataGrid-columnHeaderTitle {
    font-weight: 600;
  }
  & .MuiDataGrid-columnSeparator {
    display: none;
  }
  & .MuiDataGrid-iconButtonContainer {
    margin-left: 10px;
  }
  & .MuiDataGrid-cell {
    &:focus-within {
      outline: none;
    }
    border: none;
  }

  & .MuiDataGrid-row:nth-of-type(even) {
    background-color: whitesmoke;
  }

  input[type="checkbox"] {
    width: 100%;
    height: 100%;
  }
`;
