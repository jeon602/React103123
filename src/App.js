import React, { useState } from "react";
import { Button, others, Text } from "@chakra-ui/react";

function ChildComp() {
  return <Button onClick={onclick}>클릭</Button>;
}

function SomeComp({ onClick }) {
  return <ChildComp onClick={onClick} />;
}

function OtherChildComp({ message }) {
  return <Text>{message}</Text>;
}

function OtherComp({ message }) {
  return <OtherChildComp message />;
}

function App(props) {
  const [message, setMessage] = useState("원래 메세지");
  return (
    <div>
      <SomeComp onClick={() => setMessage("다른 메세지!!")} />
      <OtherComp message={message}></OtherComp>
    </div>
  );
}

export default App;
