import { Action } from "../actions";

const initialCount: number = 0;

export const counterReducer = (
  state: number = initialCount,
  action: Action
): number => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
