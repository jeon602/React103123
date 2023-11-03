function MyComp({ text, address, children }) {
  return (
    <>
      <p>{text}</p>
      <p>{address}</p>
      <p>{children}</p>
    </>
  );
}
//property

function App(props) {
  return (
    <div>
      <MyComp text="hello" address="SEOUL">
        some component 다른 컴포넌트가 존재할 수 있음.
      </MyComp>
    </div>
  );
}

export default App;
