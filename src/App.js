import React, { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function App(props) {
  let [number, setNumber] = useState();

  function handleClick() {
    // number++;
    setNumber(number++);
  }
  return (
    <div>
      <Button onclick={handleClick} bg="tomato">
        Change
      </Button>
      <Text>{number}</Text>
    </div>
  );
}

export default App;
