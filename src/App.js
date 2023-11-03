import React, { useState } from "react";
import { Button, Input } from "@chakra-ui/react";

function App(props) {
  // 상태(state)가 변경(이전 state와 달라짐)되면
  // Component를 다시 그림 (re render)

  // state : react가 관리하는 component의 값

  // state를 얻는 방법
  // useState();

  // 배열을 리턴함
  // index 0 : 현재상태(state)
  // index 1 : state를 변경할 수 있는 메소드
  // const [message, setMessage] = useState("");
  const [message, setMessage] = useState("");

  // 상태가 바뀔 때에만 컴포넌트가 re render됨

  let text = "초기 메시지";
  function handleInputChange(e) {
    text = e.target.value;
    console.log("text", text);
  }

  function handleButtonClick(e) {
    setMessage("바뀐 상태");
  }
  return (
    <div>
      <Input onChange={handleInputChange} />
      <p>{text}</p>
      <Button onClick={handleButtonClick}>상태 바꾸기</Button>
      <Button onClick={() => setMessage("")}>빈 문자열로 바꾸기</Button>
      <p>{message}</p>
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import { Input } from "@chakra-ui/react";
// //상태가 변경되면 coponent를 다시 그림 (re render)
// //state chanage(이전 state와 달라짐)되면 component를
//
// //
// // usestate(); //얘가 리턴하는 건 배열., 2개의 아이템 존재
// //index 0:은 state 현재 상태
// //index 1:은 state를 변경할 수 있는 메소드 (변경이 되고 안되고 는 리액트가 관리할 일)
// //stateㄹ를 변경할 수 도 있는 메소든데 클릭했을 때 바뀐상태
// // 리액트는 set메세지에 들어간 내용이 같다면 새로 주어진 상태가 이전의 내용과 같다면 깜박거리지 않는다.(리액트는 )
// // const [messge,setMessage] = useState(""); //괄호 안에 초기값 설정가능
// //관습대로 작성해준다. usestate
//
// //실제 상태가 바뀔 때만 COMPONENT가 RE RENDER됨
// const [message, setMessage] = useState("");
// function App(props) {
//   text = e.target.value;
//   let text = "초기 메세지";
//   function handleInputChange(e) {
//     text = e.target.value;
//     console.log("text", text);
//   }
//   function handleButtonClick(e) {
//     func("바뀐 상태");
//   }
//   return (
//     <div>
//       <Input onChange={handleInputChange} />
//       <p>{text}</p>
//       <Button onClick={handleButtonClick()}>상태 바꾸기</Button>
//       <Button onClick={() => setMessage("")}>빈 문자열로 바꾸기</Button>
//       <p>{message}</p>
//     </div>
//   );
// }
//
// export default App;
