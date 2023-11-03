import React from "react";
import { Button } from "@chakra-ui/react";
function MyComp({ children, executeClick }) {
  return (
    <div>
      <Button onClick={executeClick}>{children}</Button>
    </div>
  );
}
function App(props) {
  function fun1() {
    console.log("func1 실행");
  }
  let fun2 = () => {
    console.log("arrow fuction 실행 111");
  };

  return (
    <div>
      <MyComp executeClick={fun1}>Button1 </MyComp>
      <MyComp executeClick={fun2}>Button2</MyComp>
      <MyComp
        executeClick={() => {
          console.log("arrow fuction 실행 3");
        }}
      >
        Button3
      </MyComp>
    </div>
  );
}

export default App;
