import 'App.css';
import useCounter from 'hooks/useCounter';
import KanyeQuote from 'KanyeQuote';
import OfficeQuote from 'OfficeQuote';
import RonQuote from 'RonQuote';

export default function App() {
  const [count, increment, decrement, clear] = useCounter();

  return (
    <div className="App">
      <h1>React App</h1>

      <div>
        {count}
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={clear}>0</button>
      </div>
      <div>
        <ul>
          {(count %2 === 0) && <KanyeQuote/>}
          {(count %2 === 0) && <OfficeQuote/>}
          {(count %2 === 0) && <RonQuote/>}
        </ul>
      </div>


    </div>
  );
}