import "./App.css";
// import Todo from "./components/Reducer/TodoForm";

import CounterApp from "./components/Redux/CounterApp";
import { store } from "./components/Redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      {/* <Todo /> */}
      <Provider store={store}>
        <CounterApp />
      </Provider>
    </div>
  );
}

export default App;
