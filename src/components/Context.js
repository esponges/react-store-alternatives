import { useContext } from "react";
import { CounterContext } from "../stores/context/store";

export const Context = () => {
  const { count, increment, decrement } = useContext(CounterContext);

  return (
    <div className="context">
      <h1>Context Container</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>Counter: {count}</p>
    </div>
  );
};
