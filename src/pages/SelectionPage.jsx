import { Link } from "react-router-dom";
import SortVisualizer from "../components/SortVisualizer";
import { selectionSort } from "../algorithms/selectionSort";

export default function SelectionPage() {
  return (
    <div style={{ padding: 30 }}>
      <h1 style={{ marginBottom: 20 }}>Selection Sort</h1>

      <SortVisualizer
        algoName="Selection Sort"
        sortFunction={selectionSort}
        mode="selection"
      />

      <div style={{ marginTop: 20 }}>
        <Link to="/"> 
          <button style={{ padding: "8px 14px" }}>🏠 Back to Home</button>
        </Link>
      </div>
    </div>
  );
}
