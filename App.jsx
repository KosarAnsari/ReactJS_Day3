function App() {
  function callFun() {
    alert('function called');
  }

  /* const fruit = () => {
    alert("apple")
  }*/

  const fruit = (name) => {
    alert(name);
  };
  return (
    <>
      <h1>Event and function call</h1>
      <button onClick={() => fruit('Banana is a fruit')}> Banana</button>
      <button onClick={() => fruit('One Apple a day keeps the doctor away!')}>
        Apple
      </button>
    </>
  );
}

export default App;
