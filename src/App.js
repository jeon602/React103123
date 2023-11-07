import React, { createContext, useContext, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function CComp() {
  //3. context 사용하기 : useContext(Context);
  const message = useContext(MessgeContext);
  return <Text>받은메세지 : {message}</Text>;
}
function Bcomp() {
  return <CComp />;
}

function Acomp() {
  return <Bcomp />;
}

function App(props) {
  const [message, setMessage] = useState("");
  //message state-> Ccomp에 전달하기
  // context만들기: create context () component 바깥에서 만들면 된다.
  // 대부분의 코드에 null을 넣는데,
  //: <Context.Provider value = {state}><Context.Provider>
  // tree안에

  {
    /*message state를 CComp에 전달하기
  1.context만들기 : createContext();
  2.context에 state 넣기 : <Context.Provider value= {state}><Context.Provider>
  3.tree 안에 context 사용하기 */
  }

  return (
    <div>
      <Button onClick={() => setMessage("바꾼 메세지")}>메세지 바꾸기 </Button>
      <MessageContext.Provider value={message}>
        <Acomp />
      </MessageContext.Provider>
    </div>
  );
  //context이름은 ~~~Contect로 지으면 된다 메세지용이다 ~ 로그인용이다 ~~ 이름 짓기 나름  ㅡ> MessageContext= create
  // Create the Context
  // put state and dispatch into Context
  // use context anywhere in the tree

  {
    /*1.context 만들기
  context이름은 대문자로 시작하고 ~~ context로 끝남*/
  }

  const MessageContext = createContext(null);
}

export default App;
