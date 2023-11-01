// export된 컴포넌트(변수, 함수, 객체) 를 import
import { MyElem, city, person, country } from "./MyBox";
import age from "./MyComp1101/MyElem";
import MyContainer, { person, country } from "./MyComp1101/MyBox";

function App() {
  return (
    <>
      <h1>{city}</h1>
      <h1>{age}</h1> {/*default 는 하나밖에 없으므로 이름 상관 x*/}
      <MyContainer />
      <h1>
        {person.age},{person.name}
      </h1>
      <h1>{country}</h1>
    </>
  );
}
export default App;
