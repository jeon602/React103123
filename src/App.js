import React from "react";
import { Center } from "@chakra-ui/react";

function App(props) {
  function handleClick(e) {
    e.stopPropagation();
    console.log(e.target.className);
  }

  return (
    <Center className="outerBox" w="200px" h="200px" bg="gold">
      <Center className="innerBox" w="100px" h="100px" bg="skyblue">
        <button onClick={handleClick}>button</button>
      </Center>
    </Center>
  );
}

export default App;
