import React from "react";
import { Button } from "@chakra-ui/react";
//on property
function App(props) {

  //event handler method
  //browser는 event객체를 매개값으로 넣어줌 ()
  //넣어주려면 e(event) 파라미터를 명시해주면 된다.
  //google : search : js event : mdn web docs : 자주 사용하는 이벤트들. 모든 이벤트 클래스 명은
  // ~~event로 끝나며
  //target이라는
  function handleClick(e) {
    // console.log(e);
    console.log(e.target); //이벤트가 발생했을 때 브라우저가 실행을 하는데 .. ... 버튼 1과 버튼 2는 서로 다른 클래스를 가지고 있기때문에
    //                         브라우저 이벤ㅌ, 발생하면 각 다른 실행이 된다.
    //실제 일어난 elemt //ehapdlsdp elemt확인하면 이벤트가 발생한 element를 확인 할 수 있다.
    // 이벤트가 일어난 클래스들의 이름을 알고싶으면,.
    //console.log(e.target.className);
    //버튼의 타입프로퍼티를 확인하고 싶으면
    //타겟은 이벤트가 발생한 것을 알려준다.
    // console.log(e.target.type);
  }
  return (
    <div>
      <Button onClick={handleClick} colorScheme="gray">
        BUTTON1
      </Button>
      <Button onClick={handleClick} colorScheme="pink">
        BUTTON2
      </Button>
    </div>
  );
}

export default App;
