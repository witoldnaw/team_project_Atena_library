import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { useContext } from "react";
import "./App.css";
import { Register } from "./view/Auth/Register/Register";
import { Login } from "./view/Auth/Login/Login";
import { ForgotPassword } from "./view/Auth/ForgotPassword/ForgotPassword";
import Home from "./view/Home/Home";
import Navigation from "./components/Layout/Navigation/Navigation";
import { BookDetails } from "./view/BookDetails/BookDetails";
import { userDataContext } from "./components/UserDataContext/UserDataContext";
import SearchingSite from "./view/SearchingSite/SearchingSite";
import Footer from "./components/Layout/Footer/Footer";
import { Profile } from "./view/Auth/Profile/Profile";
import { AddBooks } from "./view/Admin/AddBooks";
import Modal from "react-modal";

function App() {

Modal.setAppElement(document.getElementById("root"));
  const { user, role } = useContext(userDataContext);

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="auth/register" element={<Register />} />
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/profile" element={<Profile />} />
          <Route path="auth/forgot-password" element={<ForgotPassword />} />
          <Route path="admin" element={<AddBooks/>} />
          <Route path="/searching" element={<SearchingSite />} />
          <Route path="/:bookTitle/:bookId" element={<BookDetails />} />
          <Route
            path="auth/admin"
            element={role ? <AddBooks /> : <Navigate to="/auth/login" />}
          />
          <Route path="/auth/login/przypomnijhaslo" element={<ForgotPassword/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
