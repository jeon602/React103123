function MyComp({
  m = "4px",
  p = "8px",
  color = "blue",
  bg = "white",
  text = "hi",
}) {
  return (
    <div
      style={{
        margin: m,
        padding: p,
        color: color,
        backgroundColor: bg,
        text: text,
      }}
    >
      {/*//안넣는 요소가 존재하기 때문에 기본값을 넣는 설정을 하고 싶으면*/}
      <p>{text}</p>
    </div>
  );
}
function App() {
  return (
    <div>
      <MyComp m="30px" p="10px" color="gray" bg="paleblue" text="안녕 react" />
      <MyComp m="30px" p="10px" color="gold" bg="palevioleted" />
      <MyComp p="10px" color="darkgreen" bg="yellow" />
    </div>
  );
}
export default App;
