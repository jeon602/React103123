import { Button, Center } from "@chakra-ui/react";

function App() {
  function handleOuterBoxClick(e) {
    e.stopPropagation();
    console.log("바깥 상자 클릭 ");
  }

  function handleInnerBoxClick(e) {
    e.stopPropagation();
    console.log("안쪽 상자 클릭 ");
  }

  function handleButtonClick(e) {
    e.stopPropagation();
    console.log("버튼 클릭 ");
  }

  return (
    <>
      <Center onClick={handleOuterBoxClick}>
        <Center onClick={handleInnerBoxClick}>
          <Button onClick={handleButtonClick}>버튼</Button>
        </Center>
      </Center>
    </>
  );
}
export default App;
