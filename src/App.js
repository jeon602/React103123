// {} : jsx에서 js 코드 작성하기 위한 기호

function MyComponent1() {
  return (
    <div style={{ width: "100%" }}>
      <img
        style={{ width: "100%" }}
        src="https://i.imgur.com/SuL4x4v.jpeg"
        alt="경복궁"
      />
      ;
    </div>
  );
}
function MyComponent2() {
  let name = "손흥민";
  let age = 23;

  return (
    <>
      <h1>hello</h1>
      <h1>hello{name}</h1>
      <h1>{age}years</h1>
      <h1>{age * 2}</h1>
      <h1>{name + "선수"}</h1>
    </>
  );
}

export default App;
