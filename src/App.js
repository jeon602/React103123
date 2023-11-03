import React from "react";
import { Button } from "@chakra-ui/react";

function MyComp({ to, someProp }) {
  someProp();

  return (
    <>
      <div>
        <a href={to[0]}>LINK !</a>
      </div>

      <div>
        <Button onclick={someProp}>버튼</Button>
      </div>
    </>
  );
}

function App(props) {
  function fun1() {
    console.log("func1 실행됨.");
  }

  return (
    <div>
      <MyComp to={["http://www.naver.com"]} someProp={fun1}></MyComp>
    </div>
  );
}

export default App;
