import React from "react";
import { Card, CardBody } from "@chakra-ui/react";

// children props 연습 2 : Mybox colore bg chilren

function MyBox({ color, bg, children }) {
  return (
    <>
      <Card color={color} bg={bg}>
        <CardBody>{children}</CardBody>
      </Card>
    </>
  );
}

function App(props) {
  return (
    <div>
      <MyBox color="black" bg="yellowgreen">
        HAVE NICE DAY!!!!!
      </MyBox>

      <MyBox color="black" bg="tomato">
        TODAY IS FIRDAY!
      </MyBox>
    </div>
  );
}

export default App;
