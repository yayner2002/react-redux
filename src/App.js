import { useSelector } from "react-redux";

function App() {
  const counter = useSelector(state => state.count)
  const isLogged = useSelector(state => state.isLogged)
  return (
    <div className="App">
      <h1>Num of Count : {counter}</h1>
      {isLogged ? <h3>you have succesfully logged in</h3> : ''}
    </div>
  );
}

export default App;
