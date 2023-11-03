import React, { useState } from "react";
import { Text } from "@chakra-ui/react";

function App(props) {
  const [number, setNumber] = useState(0);
  //필요하면 다른 값을 파생시킬 수ㅡ 있다/
  const isOdd = number % 2 === 1;
  function handleInputChange(e) {
    setNumber(Number(e.target.value));
  }
  return (
    <div>
      <input type="number" onChange={handleInputChange} bg="yellowgreen" />
      <Text>
        {isOdd && "홀수"}
        {isOdd || "짝수"}
      </Text>
    </div>
  );
}

export default App;
