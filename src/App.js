// import {
//   Box,
//   Button,
//   Center,
//   Circle,
//   Modal,
//   ModalCloseButton,
//   ModalContent,
//   ModalHeader,
//   ModalOverlay,
//   Square,
// } from "@chakra-ui/react";
//
// function App() {
//   return (
//     <>
//       <Button onClick={onOpen}>open modal</Button>
//
//       <Modal
//         closeOnOverlayClick={false}
//         isOpen={isOpen}
//         onClose={onclose}
//         isCentered
//         motionPreset="slideInBottom"
//       >
//         <ModalOverlay />
//         <ModalContent />
//         <ModalHeader>Title of Modal</ModalHeader>
//         <ModalCloseButton />
//         <ModalBody>Lorem.</ModalBody>
//
//         <ModalFooter>
//           <Button colorScheme="skyblue" onClick={onclose()}>
//             Close
//           </Button>
//         </ModalFooter>
//       </Modal>
//     </>
//   );
// }
//
// export default App;
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>모달 열기</Button>

      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>모달의 제목</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
            aperiam, architecto aspernatur dolorum ex exercitationem, expedita
            fuga laborum magni molestiae officiis optio porro possimus quae quod
            vitae voluptatem! Ipsum, officia!
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              닫기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default App;
