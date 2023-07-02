import { combineReducers } from "redux";
import { counterReducer } from "./couter";

export const rootReducer = combineReducers({
  counterReducer,
});
