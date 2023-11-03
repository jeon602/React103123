import React from "react";

function App(props) {
  function handleClick(e) {
    e.preventDefault(); //실제 기본으로 해야 하는 일을 막는다. //실행시키지 않으면 클릭했을 때 작동해서 네이버로 이동함.
    //브라우저가 해야 하는 기본 기능을 취소함---> preventDefault
    console.log("다른 일을 시킴");
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("다른일을 시킴");
  }

  return (
    <div>
      <a href="http://www.naver.com" onClick={handleClick}>
        네이버
      </a>
      <div>
        <form action="http://www.naver.com">
          <input type="text" name="q" />
          <button>search</button>
        </form>
      </div>
    </div>
  );
}

export default App;
