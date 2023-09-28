/** @format */

import { legacy_createStore, combineReducers } from "redux";
import { workerReducer } from "./workerReducer/workerReducer";

let rootReducer = combineReducers({
  workerReducer,
});

export let store = legacy_createStore(rootReducer);
