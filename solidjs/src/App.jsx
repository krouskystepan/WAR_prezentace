import './App.css';
import { createSignal, onCleanup } from 'solid-js';

function App() {
  const [count, setCount] = createSignal(0);
  const interval = setInterval(() => setCount((c) => c + 1), 1);

  onCleanup(() => clearInterval(interval));
  return (
    <>
      <div>{count()}</div>
    </>
  );
}

export default App;
