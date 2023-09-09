import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes></Routes>
      </Router>
    </div>
  );
}

export default App;
