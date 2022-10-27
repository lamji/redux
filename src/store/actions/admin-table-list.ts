import * as types from "src/store/config/admin-table-list";

export const setTab = (payload: any) => ({
  type: types.SET_TAB,
  payload,
});

export const setFilter = (payload: any) => ({
  type: types.SET_FILTER,
  payload,
});

export const removeFilter = (payload: any) => ({
  type: types.REMOVE_FILTER,
  payload,
});

export const resetFilter = () => ({
  type: types.RESET_FILTER,
});

export const setSearchText = (payload: any) => ({
  type: types.SET_SEARCH_TEXT,
  payload,
});

export const changePagination = (payload: any) => ({
  type: types.CHANGE_PAGINATION,
  payload,
});

export const sortColumns = (payload: any) => ({
  type: types.SORTING,
  payload,
});

export const setDefaultFilterCheckbox = (payload: any) => ({
  type: types.SET_DEFAUlT_CHECKBOX,
  payload,
});
export const setFilterCheckbox = (payload: any) => ({
  type: types.SET_FILTER_CHECKBOX,
  payload,
});

export const removeFilterCheckbox = (payload: any) => ({
  type: types.REMOVE_FILTER_CHECKBOX,
  payload,
});

// Table checkbox selection
// for floating action and export
export const setCheckbox = (payload: any) => ({
  type: types.SET_CHECKBOX,
  payload,
});
export const setSelection = (payload: any) => ({
  type: types.SET_SELECTION,
  payload,
});

export const setSelectionData = (payload: any) => ({
  type: types.SET_SELECTION_DATA,
  payload,
});

export const removeAllCheckbox = () => ({
  type: types.REMOVE_ALL_CHECKBOX,
});

export const setValues = (payload: any) => ({
  type: types?.SET_VALUES,
  payload,
});
