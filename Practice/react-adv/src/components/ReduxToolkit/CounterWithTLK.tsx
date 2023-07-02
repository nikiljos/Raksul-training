import { increment, decrement } from "./features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./hooks";

function CounterWithTLK() {
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <p>{count}</p>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default CounterWithTLK;
