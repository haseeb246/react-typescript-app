import { Fragment, useEffect } from "react";

interface IProps {
  count: number;
  index: number;
  onDelete: (index: number) => void;
}

function Counter({ index, count, onDelete }: IProps) {
  useEffect(() => {
    debugger;
  }, [count]);

  useEffect(() => {
    debugger;
  }, []);

  return (
    <Fragment key={index}>
      <p>Counter comp : {count}</p>
      <button type="button" onClick={() => onDelete(index)}>
        Delete
      </button>
    </Fragment>
  );
}

// function Counter(props: IProps) {
//   return (
//     <Fragment key={props.index}>
//       <p>Counter comp : {props.count}</p>
//       <button
//         type="button"
//         onClick={() => props.onDelete && props.onDelete(props.index)}
//       >
//         Delete
//       </button>
//     </Fragment>
//   );
// }

export default Counter;
