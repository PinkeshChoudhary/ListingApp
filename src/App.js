import "./App.css";
import { Home } from "./MyComponents/Home";
import { Login } from "./MyComponents/Login";
import { SignUp } from "./MyComponents/SignUp";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ResetPassword } from "./MyComponents/ResetPassword";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Login/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
