import { Link } from "react-router-dom";
import SortVisualizer from "../components/SortVisualizer";
import { bubbleSort } from "../algorithms/bubbleSort";

export default function BubblePage() {
  return (
    <div style={{ padding: 30 }}>
      <h1 style={{ marginBottom: 20 }}>Bubble Sort</h1>

      <SortVisualizer
        algoName="Bubble Sort"
        sortFunction={bubbleSort}
        mode="bubble"
      />

      {/* ✅ Home button */}
      <div style={{ marginTop: 20 }}>
        <Link to="/">
          <button style={{ padding: "8px 14px" }}>🏠 Back to Home</button>
        </Link>
      </div>
    </div>
  );
}
