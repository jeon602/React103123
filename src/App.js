function App() {
  return (
    <>
      <MyComp name="손흥민" address="신촌" age={33} city="서울" />
      <MyComp address="강남" age={23} city="부산" />
      <MyComp address="런던" age={23} city="영국" />
      <MyComp name="희찬" address="런던" age={66} city="프랑스" />
    </>
  );
}
function MyComp({ name = "anonymous", address, city, age = 100 }) {
  return (
    <div>
      <p>
        {name}은{age}세 이고 {address}, {city}에 거주한다.
      </p>
    </div>
  );
}
export default App;
