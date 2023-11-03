import React from "react";
import { Button } from "@chakra-ui/react";

//리액트에는 함수 명 작성 관습이 존재하는데
// handle이벤트명
//이벤트 명 앞에 handle이라고 작성한다.

function App(props) {
  function someFuctionName() {
    console.log("Second");
  }
  function handleMouseEnter() {
    console.log("third");
  }
  function handleMouseLeave() {
    console.log("4th");
  }
  return (
    <div>
      <Button onClick={() => console.log("first")}>버튼1</Button>
      <Button onClick={someFuctionName}>버튼2</Button>
      <Button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        버튼3
      </Button>
    </div>
  );
}

export default App;
