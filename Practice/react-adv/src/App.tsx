import "./App.css";
import CustomeHook from "./components/CustomeHook/CustomeHook";

// import JsonATA from "./components/jsonATA/JsonATA";

// import CounterWithTLK from "./components/ReduxToolkit/CounterWithTLK";
// import { Provider } from "react-redux";
// import { store } from "./components/ReduxToolkit/store";

// import CounterApp from "./components/Redux/CounterApp";
// import { store } from "./components/Redux/store";
// import { Provider } from "react-redux";

// import Todo from "./components/Reducer/TodoForm";

function App() {
  return (
    <div className="App">
      {/* <Todo /> */}
      {/* <Provider store={store}>
        <CounterApp />
      </Provider> */}
      {/* <Provider store={store}>
        <CounterWithTLK />
      </Provider> */}
      {/* <JsonATA /> */}
      <CustomeHook />
    </div>
  );
}

export default App;
