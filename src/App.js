function App() {
  return (
    <>
      <MyElem name="흥민" age={44} team="토트넘" />
      <MyElem name="강인" age={23} team="파리" />
    </>
  );
}
function MyElem({ name, age, team }) {
  return (
    <div>
      <h2>
        {name}의 나이는{age}, {team}소속의 선수
      </h2>
    </div>
  );
}
export default App;
