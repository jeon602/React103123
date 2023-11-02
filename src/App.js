import { Box, Center, Circle, Square } from "@chakra-ui/react";
import { ChatIcon, PhoneIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Center bg={"tomato"} h={"200px"}>
        <Square bg={"white"} w={"100px"} h={"100px"}>
          <ChatIcon />
          Lorem.
        </Square>
      </Center>

      <Center bg={"yellowgreen.100"} h={"200px"}>
        <Circle bg={"yellowgreen"} w={"100px"} h={"100px"}>
          AAA+
          <PhoneIcon />
        </Circle>
      </Center>
    </>
  );
}

export default App;
