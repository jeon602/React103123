function App() {
  return (
    <div>
      <MyText
        style={{ color: "blue", border: "5px solid yellow" }}
        value="hello"
      ></MyText>
      <MyText style={{ color: "red", border: "5px dotted blue" }}></MyText>
    </div>
  );
}
function MyText(props) {
  return (
    <div style={props.style}>
      <p>{props.value}</p>
    </div>
  );
}
export default App;
