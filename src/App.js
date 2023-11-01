function MyHeader(props) {
  return (
    <div style={{ color: props.color, backgroundColor: props.bg }}>
      <h1 />
      {props.text}
    </div>
  );
}
function App() {
  return(<div>
    <MyHeader color = "white" bg = "black" text ="내가만들 제목"><div/>
    <MyHeader color = "white" bg = "black" text ="내가만들 제목"><div/>
      <div/>
      );


}

export default App;
