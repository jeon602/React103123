// 아래와 같이 export하는 걸 'named export'라고 한다.
function MyElem() {
  return (
    <div>
      <h1>my Elem</h1>
    </div>
  );
}
//named export
export const city = "seoul";
//default export:

const age = 33;
//defaultexport는 이름이 정해져 있지 않으며
//한 파일에 하나밖에
export default age;
