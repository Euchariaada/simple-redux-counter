import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {increment, decrement, reset} from './store/reducer'

function App() {
  const counter= useSelector((counter)=>counter.counter.counter)
  const dispatch= useDispatch()
  const handleIncrement= ()=>{
    dispatch(increment())
  }
  const handleDecrement= ()=>{
    dispatch(decrement())
  }
  const handleReset= ()=>{
    dispatch(reset())
  }

  return (
    <div className="App">
      <h1>COUNTER</h1>
      <h4>{counter}</h4>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
