import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import { useContext } from "react";

import "./App.css";
import { Profile } from "./components/Profile/Profile";
import { Register } from "./components/Register/Register";
import { Login } from "./components/Login/Login";
import { ForgotPassword } from "./components/ForgotPassword/ForgotPassword";
import Home from "./view/Home/Home";
import Navigation from "./components/Layout/Navigation/Navigation";
import { BookDetails } from "./view/BookDetails/BookDetails";

import { userDataContext } from "./components/UserDataContext/UserDataContext";
import Footer from "./components/Layout/Footer/Footer";

function App() {
  const { user, role } = useContext(userDataContext);


  return (
    <div className="App">
      <BrowserRouter>

        <Navigation user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="auth/register" element={<Register />} />
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/forgot-password" element={<ForgotPassword />} />

          <Route path="/:bookTitle/:bookId" element={<BookDetails />} />
          <Route
            path="auth/admin"
            element={user ? <Profile /> : <Navigate to="/auth/login" />}
          />
        </Routes>

        {/* <Footer /> */}

      </BrowserRouter>
    </div>
  );
}

export default App;
