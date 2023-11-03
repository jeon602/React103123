import React from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Switch,
  Textarea,
} from "@chakra-ui/react";
import { Box, Image } from "@chakra-ui/react";

function App(props) {
  return (
    <div>
      <Box w="480px">
        <FormControl display={"flex"} alignItems={"center"}>
          <FormLabel mb={0}>알림을 받으시겠습니까?</FormLabel>
          <Switch size={"lg"} colorScheme="orange" />
        </FormControl>
        <Image src="https://bit.ly/dan-abramov" />
      </Box>
      <Box>
        <Image boxSize="100px" src="https://bit.ly/dan-abramov" />
      </Box>
      <Box>
        <Image boxSize="200px" src="https://bit.ly/dan-abramov" />
      </Box>
      <Box>
        <Image
          borderRadius="full"
          boxSize="200px"
          src="https://bit.ly/dan-abramov"
        />
      </Box>
      <Box>
        <Image src="abcde.jpg" fallbackSrc="https://via.placeholder.com/150" />
      </Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </div>
  );
}

export default App;

