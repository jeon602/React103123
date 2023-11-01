import block from "../style/yourstyle.module.css";
export function MyBlock() {
  return (
    <div>
      <h1 className={block.error}>Lorem ipsum dolor sit amet.</h1>
      <h1 className={block.special}>Lorem ipsum dolor sit amet.</h1>
      <h1 className={block.coffee}>Lorem ipsum dolor sit amet.</h1>
    </div>
  );
}
