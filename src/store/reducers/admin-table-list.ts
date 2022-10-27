import * as types from "src/store/config/admin-table-list";

const initialState = {
  tab: "",
  filterCheckbox: [],
  checkbox: [],
  selection: [],
  selectionData: [],
  filters: {
    search: "",
  },
  pagination: {
    page: 1,
    limit: 10,
  },
  sort: {
    sort: "",
    order: "",
  },
  searchText: "",
};

const AdminTableListReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case types.SET_TAB:
      return { ...initialState, tab: action?.payload };

    case types.SET_FILTER:
      return {
        ...state,
        filters: {
          ...state?.filters,
          ...action?.payload,
        },
        pagination: {
          ...state?.pagination,
          page: 1,
        },
        checkbox: [],
      };

    case types.REMOVE_FILTER:
      const newState: any = { ...state?.filters };
      delete newState?.[action?.payload];
      return {
        ...state,
        filters: {
          ...newState,
        },
      };

    case types.RESET_FILTER:
      return initialState;

    case types.CHANGE_PAGINATION:
      return {
        ...state,
        checkbox: [],
        pagination: action?.payload,
      };

    case types.SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action?.payload,
      };

    case types.SORTING:
      return {
        ...state,
        sort: action?.payload,
      };

    case types.SET_DEFAUlT_CHECKBOX:
      return {
        ...state,
        filterCheckbox: action?.payload,
      };

    case types.SET_FILTER_CHECKBOX:
      return {
        ...state,
        filterCheckbox: [...state?.filterCheckbox, action?.payload],
      };

    case types.REMOVE_FILTER_CHECKBOX:
      const newFilterCheckbox = (state?.filterCheckbox || []).filter(
        (item: any) => item?.name !== action?.payload?.name
      );
      const key = action?.payload.key;
      const isKeyObject = typeof key === "object";
      const filterKeyToBeRemoved = key;
      const filterState: any = { ...state?.filters };

      if (isKeyObject) {
        key.map((i: string) => delete filterState?.[i]);
      } else {
        delete filterState?.[filterKeyToBeRemoved];
      }

      return {
        ...state,
        filters: filterState,
        filterCheckbox: newFilterCheckbox,
      };

    case types.SET_CHECKBOX:
      return {
        ...state,
        checkbox: [...action?.payload],
      };

    case types.SET_SELECTION:
      return {
        ...state,
        selection: [...action?.payload],
      };

    case types.SET_SELECTION_DATA:
      return {
        ...state,
        selectionData: [...action?.payload],
      };

    case types.REMOVE_ALL_CHECKBOX:
      return {
        ...state,
        checkbox: [],
        selection: [],
      };

    case types.SET_VALUES:
      return {
        ...state,
        ...action?.payload,
      };

    default:
      return state;
  }
};

export default AdminTableListReducers;
