function App() {
  return (
    <div style={{ display: "flex" }}>
      <MyCompo />
      <MyCompo />
      <MyCompo />
    </div>
  );
}
function MyCompo() {
  const name = "흥민";

  return <div>{name}</div>;
}

export default App;
