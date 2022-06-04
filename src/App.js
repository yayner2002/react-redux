import { useSelector } from "react-redux";

function App() {
  const counter = useSelector(state => state.count)
  return (
    <div className="App">
      <h1>Num of Count : {counter}</h1>
    </div>
  );
}

export default App;
