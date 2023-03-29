import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import "./styles/App.css";

function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>          
          <Route path="/" element={<Home />} />
          <Route path="/contact" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
