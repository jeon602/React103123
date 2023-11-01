import MyBox, { address } from "./MyComp1101/MyBox";
import MyElem, { address as myAddress } from "./MyComp1101/MyElem";
//별칭 as named export값을 import할 때 별칭을 부여할 수 있음.
function App() {
  return (
    <>
      <h1>{address}</h1>
      <h1>{myAddress}</h1>
      <MyElem />
      <MyBox />
    </>
  );
}

export default App;
