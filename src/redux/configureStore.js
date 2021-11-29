import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger/src";
import thunk from "redux-thunk";
import { reducer } from "./features/data_base";

const logger = createLogger({
  diff: thunk,
  collapsed: true,
});

export const store = createStore(reducer, applyMiddleware(thunk, logger));
