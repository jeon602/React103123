    function App() {
      const myStyle = {
        color: "blue",
        backgroundColor: "gold", // lowerCamelCase
        fontSize: "70px",
        textAlign: "center",
      }; // js object

      return (
        <>
        {/* style 속성은 객체로 주어야 함 */}
        <div style={myStyle}>Lorem ipsum dolor.</div>
        <hr />
        <div
          style={{ color: "red", backgroundColor: "yellow", fontSize: "30px" }}
        <h1
          className="note"
          style={{ backgroundColor: "blue", color: "white" }}
          title="제목 요소"
        >
          Lorem ipsum dolor.
        </div>
    </>Lorem.
    </h1>
      <p title="문단 요소">Lorem ipsum dolor.</p>
      <MyComp title="내 컴포넌트" name="흥민" />
      <MyComp title="I am 컴포넌트에요" name="강인" />
    </>
    );
    }

    // 함수 인자로
    // 사용한 곳에서 넘긴 property들이 객체형태로 담김
    // 예) title="내 컴포넌트"  => {title: "내 컴포넌트"}
    // 예) title="내 컴포넌트" name="흥민"  => {title: "내 컴포넌트", name: "흥민"}
    function MyComp(props) {
      console.log("MyComp가 받은 props", props);
      return (
        <div>
          <h1 title={props.title}>hello {props.name}</h1>
        </div>
      );
    }

    export default App;

