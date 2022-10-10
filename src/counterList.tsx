import { useState } from "react";
import Counter from "./counter";

function CounterList() {
  const [counters, setCounters] = useState<number[]>([1, 2, 3, 4, 5]);

  //   function handleIncrementClick() {
  //     debugger;
  //     setCount(count + 1);
  //   }
  //   function handleDecrementClick() {
  //     debugger;
  //     setCount(count - 1);
  //   }

  function handleDelete(index: number) {
    debugger;
    let counterList = [...counters];
    counterList.splice(index, 1);
    setCounters(counterList);
  }
  return (
    <>
      <h3>Counter List</h3>
      {counters &&
        counters.map((item, index) => {
          return (
            <Counter
              count={item}
              index={index}
              onDelete={(index) => handleDelete(index)}
            />
          );
        })}
    </>
  );
}

export default CounterList;
