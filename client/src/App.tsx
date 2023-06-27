import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/LoginSignup/Login";
import Signup from "./components/LoginSignup/Signup";
import GroupMain from "./components/GroupMain/GroupMain";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/home" Component={GroupMain} />
      </Routes>
    </>
  );
};

export default App;
