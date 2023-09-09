import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import Packages from "./Pages/Packages";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="packages/:id" element={<Packages />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
