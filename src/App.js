import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import Packages from "./Pages/Packages";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/packages/:id" element={<Packages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
