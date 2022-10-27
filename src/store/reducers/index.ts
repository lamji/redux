"use strict";

import { combineReducers } from "redux";
import adminTableListReducers from "./admin-table-list";

export default combineReducers({
  admin_table_list: adminTableListReducers,
});
