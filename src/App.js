function MyComp() {
  const adress = "Seoul";
  const country = "korea";
  const phone = "01099999999";
  const age = 44;
  const randomNumber = Math.random();

  return (
    <>
      <h2>age는 {age}</h2>;<h2>address는 {adress}</h2>;<h2>전화번호 {phone}</h2>
      ;<h2>country {country}</h2>;<h2>난수 {randomNumber}</h2>;
    </>
  );
}

function App() {
  return (
    <div>
      <MyComp />
      {/*
       <h1>age는 44</h1>
       <h1>address는 seoul</h1>
       <h1>country는 korea</h1>
       <h1>전화번호는 01099999999</h1>
     */}
    </div>
  );
}

export default App;
