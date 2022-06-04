import { useSelector, useDispatch } from "react-redux";
import { inc } from "./actions";
import { dec } from "./actions";

function App() {
  const counter = useSelector(state => state.count)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <div className="App">
     
      <button onClick={() => dispatch(dec(2))}>-</button><span>{counter}</span>
      <button onClick={() => dispatch(inc(2))}>+</button>
      {isLogged ? <h3>you have succesfully logged in</h3> : ''}
    </div>
  );
}

export default App;
