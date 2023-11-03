import React from "react";
import { Input } from "@chakra-ui/react";

function App(props) {
  let text = "initial text";
  function handleChange(e) {
    // console.log("input값이 변경됨");
    console.log(e.target.value);
    text = e.target.value; // 실제 택스트는 변경되었으나 리액트에서는 변수를 변경했다고 반영해주지 않는다.
  }
  return (
    <div>
      <Input onChange={handleChange} bg="tomato" />
      <Input onChange={handleChange} />
    </div>
  );
}

export default App;
