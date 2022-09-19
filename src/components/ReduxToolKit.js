import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../stores/redux-tool-kit/slices/counter";

export const ReduxToolKit = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);

  return (
    <div className="redux-toolkit">
      <h1>Redux Tool Kit Container</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <p>Counter: {counter}</p>
    </div>
  );
};
