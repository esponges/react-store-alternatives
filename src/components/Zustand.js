import { useCounterStore } from "../stores/zustand/store";

export const Zustand = () => {
  const counter = useCounterStore((state) => state.count);
  const increaseCount = useCounterStore((state) => state.increment);
  const decreaseCount = useCounterStore((state) => state.decrement);

  return (
    <div className="zustand">
      <h1>Zustand Container</h1>
      <button onClick={increaseCount}>Increment</button>
      <button onClick={decreaseCount}>Decrement</button>
      <p>Counter: {counter}</p>
    </div>
  );
};
