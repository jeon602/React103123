import { Button, useToast } from "@chakra-ui/react";
import { ArrowRightIcon, EmailIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Button colorScheme="skyblue">Lorem.</Button>
      <Button colorScheme="blue">Iste.</Button>
      <Button colorScheme="yellowgreen">Est?</Button>
      <Button colorScheme="tomato">Vero.</Button>
      <Button colorScheme="skyblue">Voluptates.</Button>
      <Button colorScheme="orange">Et!</Button>
      <Button colorScheme="pink">A!</Button>
      <Button colorScheme="tomato">Harum.</Button>
      <Button colorScheme="gray">Perspiciatis.</Button>
      <Button colorScheme="black">Nam.</Button>
      <Button colorScheme="skyblue">Expedita.</Button>
      <Button colorScheme="skyblue" variant="outline">
        Vitae.
      </Button>
      <Button colorScheme="blue">Lorem.</Button>
      <Button colorScheme="red">Lorem.</Button>
      <Button colorScheme="yellow">Numquam!</Button>
      <Button colorScheme="orange">Eligendi.</Button>
      <Button colorScheme="teal" size={"sm"}>
        Dolorum.
      </Button>
      <Button colorScheme="messenger" size={"lg"}>
        Nesciunt.
      </Button>
      <Button colorScheme="telegram" variant="outline">
        Impedit?
      </Button>
      <Button colorScheme="orange" variant="ghost">
        Magni.
      </Button>
      <Button variant="link">Quos.</Button>
      <Button leftIcon={<EmailIcon />}>Quos!</Button>
      <Button rightIcon={<ArrowRightIcon />}>Optio.</Button>
      <Button isLoading>Temporibus!</Button>
      <Button isLoading loadingText="전송중">
        Quae.
      </Button>
    </>
  );
}

export default App;
