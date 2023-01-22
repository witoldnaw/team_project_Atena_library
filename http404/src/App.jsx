import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Auth } from "./components/Auth/Auth";
import Layout from "./components/Layout/Layout"
import { Register } from "./components/Register/Register";
import { Login } from "./components/Login/Login";
import { ForgotPassword } from "./components/ForgotPassword/ForgotPassword"
import Home from "./view/Home/Home";
import Navigation from "./components/Layout/Navigation/Navigation";


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navigation isAuth={isAuth} email={user?.email} /> */}
        <Routes>
          <Route path="/" element ={<Layout/>} >
          <Route path="home" element={<Home />} />
          <Route path="auth" element={<Auth/>}>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
