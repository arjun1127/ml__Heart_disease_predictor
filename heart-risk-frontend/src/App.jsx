import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Retinopathy from "./pages/Retinopathy";
import ToothDecay from "./pages/ToothDecay";
import HeartRisk from "./pages/HeartRisk";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/retinopathy" element={<Retinopathy />} />
          <Route path="/tooth-decay" element={<ToothDecay />} />
          <Route path="/heart-risk" element={<HeartRisk />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
