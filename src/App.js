import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <NumberAdd></NumberAdd>
    </div>
  );
}

function NumberAdd() {
  const[count , setValue] = useState(0);
  const increment =()=> setValue(count + 1);
  const decrement =()=> setValue(count - 1);
  return(
    <div>
      <h1>Counter Number : {count}</h1>
      <button onClick={increment} > increment </button>
      <button onClick={decrement}> decrement </button>
    </div>
  )
}

export default App;
