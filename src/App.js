function App() {
  function handleClick(e) {
    //js로 페이지 이동 : 검색 : location.href
    //a태그 클릭하면 네이버로 이동할 수 있는 메소드 작성
    e.preventDefault();
    window.location.href = "http://www.naver.com";
  }

  return (
    <>
      <a href="http://www.daum.net" onClick={handleClick}>
        다음으로 이동
      </a>
    </>
  );
}

export default App;
