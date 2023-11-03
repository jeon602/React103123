import React from "react";
import { Button } from "@chakra-ui/react";
function MyButton({ executeClick, children }) {
  return <Button onClick={executeClick}>{children}</Button>;
}
//두개의 버튼 만들기
//첫 버튼은 콘솔에 hello가 나오도록
// 두번째는 콘솔에 greeting 이 나오도록

function App(props) {
  function sayHello() {
    console.log("HELLO");
  }
  function sayGreeting() {
    console.log("GREETING");
  }
  return (
    <>
      <MyButton executeClick={sayHello}>안녕!</MyButton>
      <MyButton executeClick={sayGreeting}>그리팅</MyButton>
    </>
  );
}

export default App;
