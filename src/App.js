import Signup from "./Component/Signup";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Login from "./Component/Login";
import ForgotPassword from "./Component/ForgotPassword";
import Otp from "./Component/Otp";
import Admin from "./Component/Admin";
import Marchant from "./Component/Marchant";
function App() {
  return (
    <div className="App">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/Otp" element={<Otp />} />
        <Route path="/Admin" element={<Admin />} />
<<<<<<< HEAD
=======
        <Route path="/Marchant" element={<Marchant/>} />
>>>>>>> c610c96e (admin dasboard update)
      </Routes>
    </div>
  );
}

export default App;
