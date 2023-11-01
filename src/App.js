function App() {
  return (
    //MyBox컴포넌트 2번 사용해보기
    <div>
      {
        <MyBox
          bg="skyblue"
          color="darkblue"
          text="오늘의 날씨 🌧️"
          m="100px"
          p="center"
        />
      }
    </div>
  );
}
function MyBox({ p, m, bg, color, text }) {
  return (
    <div
      style={{
        padding: p,
        margin: m,
        background: bg,
        color: color,
      }}
    >
      <h2>{text}</h2>
    </div>
  );
}

export default App;
