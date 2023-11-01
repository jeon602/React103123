function App() {
  return (
    <>
      <MyComp value="손흥민" address="신촌" />
    </>
  );
}
function MyComp({ value, address }) {
  return (
    <div>
      <h1>
        {value}은{address}에 산다
      </h1>
    </div>
  );
}
export default App;
