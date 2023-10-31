
function App() {
  return (
    <div>
         <h2>hello react</h2>
         <h3>HI REACT</h3>
         <MyComp></MyComp>
    </div>
  );
}
//built -in component는 소문자로 시작
//COMPONENT 명은 반드시 대문자로 시작
//직접 작성하는 component는 반드시 return값을 가져야 하며
//보통 return값은 JSX 코드이다 ()
function MyComp(){
    //return의 jsx코드 작성 가능
    //꼭 하나의 root tag(상위 태그)가 존재해야 한다. 두 개의 태그를 사용하면 안되며
    //div 태그로 감싸서 2개를 작성한다.
    //return <div><h2>hi component</h2></div>
    //return값이 여러줄이면 () 로 감싸기
    //return(
    // <div>
    // <h1></h1>
    // <h2></h2>
    // </div>)
    // root tag가 필요없다면 fragment로 사용가능하다 <div> 대신 빈 <>

//jsx에서 주석사용법
// {/* */}
// {/* fragment는 <></>*/}
    return <h2>hi component</h2>
}
export default App;
