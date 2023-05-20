import React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);

  const onClickIncrement = () => {
    setCount(count + 1);
  };

  const onClickDecrement = () => {
    setCount(count - 1);
  };


  return (
    <div className='App'>
      <div>
        <h2>Counter:</h2>
        <h1>{count}</h1>
        <button onClick={onClickDecrement} className='decrement'>- Minus</button>
        <button onClick={onClickIncrement} className='increment'>+ Plus</button>
      </div>
    </div>
  );
}

export default App;
