import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../src/Api/firebase'
import "./App.css";
import { Auth } from "./components/Auth/Auth";
import Layout from "./components/Layout/Layout"
import { Register } from "./components/Register/Register";
import { Login } from "./components/Login/Login";
import { ForgotPassword } from "./components/ForgotPassword/ForgotPassword"
import Home from "./view/Home/Home";
import Navigation from "./components/Layout/Navigation/Navigation";
import { Admin } from "./components/Admin/Admin";


function App() {

  const [user, setUser] = useState(null)
  const [isAuth, setAuthState] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setAuthState(true)
        setUser(user)
      } else {
        setAuthState(false)
        setUser(null)
      }
    })
  }, [])

  if (isAuth === null) {
    return <h2>Trwa ładowanie aplikacji...</h2>
  }
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation isAuth={isAuth} email={user?.email} />
        <Routes>
          <Route path="/" element ={<Layout/>} >
          <Route path="home" element={<Home />} />
          <Route path="auth" element={!isAuth ? <Auth/> : <Navigate to="/admin" />} >
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>
          <Route
            path="admin"
            element={isAuth ? <Admin /> : <Navigate to="/auth/login" />}
          />
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
