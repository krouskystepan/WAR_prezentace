import { render } from 'preact';
import './style.css';
import { useState } from 'preact/hooks';

function App() {
  const [value, setValue] = useState(0);

  const setCount = () => {
    setValue((e) => e + 1000);
  };

  return (
    <>
      <div>Counter: {value}</div>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => setValue(value - 1)}>Decrement</button>









      <div onClick={() => setCount()} style={{ height: '100px' }}></div>
    </>
  );
}

render(<App />, document.getElementById('app'));
