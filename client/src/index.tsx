import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_OAUTH_CID as string}>
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </BrowserRouter>
);
