import { Box, flex } from "@chakra-ui/react";

function App() {
  return (
    <>
      <flex>
        <Box
          bg={"gold"}
          w={"100%"}
          h={"100px"}
          gap={3}
          align={"center"}
          fontSize={"4rem"}
          justify={"space-around"}
        >
          Lorem ipsum.
        </Box>
        <Box bg={"orange"}>Eligendi, laudantium.</Box>
        <Box bg={"blue"}>Nihil, suscipit.</Box>
        <Box bg={"pink"}>Quae, quas!</Box>
        <Box bg={"green"}>Iusto, tenetur.</Box>
      </flex>
    </>
  );
}

export default App;
