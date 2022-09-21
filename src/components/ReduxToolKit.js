import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../stores/redux-tool-kit/slices/counter";

export const ReduxToolKit = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const increase = () => dispatch(increment());
  const decrease = () => dispatch(decrement());

  return (
    <div className="redux-toolkit">
      <h1>Redux Tool Kit Container</h1>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
      <p>Counter: {counter}</p>
    </div>
  );
};
