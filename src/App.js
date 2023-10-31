import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";

function App() {
  const number = Math.ceil(Math.random() * 100);
  const islarge = number > 50;
  const isSmall = number <= 50;

  return (
    <>
      <h1 />
      ramdom : {number}
      <h1 />
      <h1>{number > 50 ? "큰 수" : "작은 수 "}</h1>
      <div>{number > 50 ? <BigImage /> : <SmallImage />}</div>
      <div>{islarge && <h1>큰 수 </h1>}</div>
      <div>{isSmall || <h1>작은 수 </h1>}</div>
    </>
  );
}
function BigImage() {
  return <h1> 큰 이미지</h1>;
}
function smallImage() {
  return <h1> 작은 이미지 이미지</h1>;
}
