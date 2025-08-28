import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">AI Healthcare Systems</h1>
      <div className="options">
        <button onClick={() => navigate("/retinopathy")}>
          Diabetic Retinopathy Detection
        </button>
        <button onClick={() => navigate("/tooth-decay")}>
          Tooth Decay & Cavity Detection
        </button>
        <button onClick={() => navigate("/heart-risk")}>
          Heart Disease Risk Prediction
        </button>
      </div>
    </div>
  );
}
