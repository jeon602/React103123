import React from "react";
import { Button } from "@chakra-ui/react";

function MyLink({ to, children }) {
  return (
    <>
      <a href={to}>{children}</a>
      <Button as="a" href={to} colorScheme="skyblue"></Button>
    </>
  );
}

function App() {
  return (
    <>
      <MyLink to="http://www.naver.com">네이버로 </MyLink>
      <MyLink to="http://www.daum.net">다음으로 </MyLink>
      {/* a href="http://www.naver.com">네이버로 */}
      {/* a href=MyLink to="http://www.daumnet">다음으로  */}
    </>
  );
}

export default App;
