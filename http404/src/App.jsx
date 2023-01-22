import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Layout/Footer/Footer";
import Navigation from "./components/Layout/Navigation/Navigation";
import Home from "./view/Home/Home";
import { BookDetails } from "./view/BookDetails/BookDetails"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:bookTitle/:bookId" element={<BookDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
