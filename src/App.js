import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, increaseAmount } from './redux/slices/conuterSlices';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state?.counter);
  console.log(counter)
  return (
    <div className="App">
      <h1>Redux Tookit Counter</h1>
      <h2>Counter: {counter?.value}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increaseAmount(100))}>Increase Amount</button>
    </div>
  );
}

export default App;
