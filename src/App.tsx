import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterList from "./counterList";

export class ABC {
  txt: string = "";
  chk: string = "";
  radio: string = "";
}

function App() {
  const [obj, setObj] = useState<ABC>(new ABC());
  // function handleChange(e: any) {
  //   debugger;
  //   let localObj = { ...obj };
  //   let name = e.target.name;
  //   let value = e.target.value;
  //   let type = e.target.type;

  //   if (type == "checkbox" || type == "radio") {
  //     value = e.target.checked;
  //   }

  //   if (name == "txt") {
  //     localObj.txt = value;
  //   } else if (name == "chk") {
  //     localObj.chk = value;
  //   } else if (name == "radio") {
  //     localObj.radio = value;
  //   }

  //   setObj(localObj);
  // }

  function handleChange(e: any) {
    debugger;
    let localObj: any = { ...obj };
    //extract manual required values from e.target object
    // const { txt,radio,chk } = obj;
    let { name, value, type, checked } = e.target;
    if (type == "checkbox" || type == "radio") {
      value = checked;
    }
    localObj[name] = value;
    setObj(localObj);
  }

  function handleSubmit() {
    debugger;
    let localObj = { ...obj };
    console.log(localObj);
  }
  return (
    <div
      className="App"
      style={{
        marginTop: "100px",
      }}
    >
      TextBox:{" "}
      <input
        type={"text"}
        name="txt"
        value={obj.txt}
        onChange={(e) => handleChange(e)}
      />{" "}
      <br />
      Checkbox:{" "}
      <input
        type={"checkbox"}
        value={obj.chk}
        name="chk"
        onChange={(e) => handleChange(e)}
      />
      <br />
      Radio:{" "}
      <input
        type={"radio"}
        value={obj.radio}
        name="radio"
        onChange={(e) => handleChange(e)}
      />
      <input
        type={"button"}
        onClick={() => handleSubmit()}
        value={"Submit"}
        name="txt"
      />
      {/* <CounterList /> */}
    </div>
  );
}

export default App;
