//내가 만든 컴포넌트에 스타일 적용시키기
//style 적용방법 : css 파일 / css module 사용

import { MyBox } from "./MyComp1101m/MyBox";
import { MyComp } from "./MyComp1101m/MyComp";
import { MyContainer } from "./MyComp1101m/MyContainer";

//chakraui css library
function App() {
  return (
    <>
      <MyComp />
      <MyBox />
      <MyContainer />
    </>
  );
}

export default App;
