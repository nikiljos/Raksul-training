import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "./actions";

function CounterApp() {
  const count = useSelector(
    (state: { counterReducer: number }) => state.counterReducer
  );
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <p>{count}</p>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
    </div>
  );
}

export default CounterApp;
