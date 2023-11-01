import React from "react";
import { MyText } from "./MyComp1101/MyText";
import { MyBox } from "./MyComp1101/MyBox";
import { MyContainer } from "./MyComp1101/MyContainer";
import { MyNavbar } from "./MyComp1101/MyNavbar";

function App() {
  return (
    <div>
      {<MyText />}
      <MyBox />
      <MyContainer />
      <MyNavbar />
    </div>
  );
}

export default App;
