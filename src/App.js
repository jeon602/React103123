// export된 컴포넌트(변수, 함수, 객체) 를 import
import {
  MyBox,
  MyElem,
  MyContainer,
  name,
  address,
  person,
} from "./MyComp1101/MyBox";
function App() {
  console.log("name", name);
  console.log("address", address);
  console.log("person", person);
  return (
    <>
      <MyBox />
      <MyElem />
      <MyContainer />
    </>
  );
}
export default App;
