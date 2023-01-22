import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout"
import { Navigation } from "./components/Layout/Navigation/Navigation";
import Footer from "./components/Layout/Footer/Footer";
import Home from "./view/Home/Home";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Layout/>}>
          {/* <Route path="home" element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="logout" element={<Layout />} />
          {/* <Route path="/" element ={<Layout/>}> */}
          <Route path="home" element={<Home />} />
          {/* <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="searching" element={<SearchingSite />} />
          <Route path="/:bookTitle/:bookId" element={<BookDetails />} />
        <Route path="user/:userName" element={<UserProfile />} /> */}
          {/* </Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
