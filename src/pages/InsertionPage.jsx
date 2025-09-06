import { Link } from "react-router-dom";
import SortVisualizer from "../components/SortVisualizer";
import { insertionSort } from "../algorithms/insertionSort";

export default function InsertionPage() {
  return (
    <div style={{ padding: 30 }}>
      <h1 style={{ marginBottom: 20 }}>Insertion Sort</h1>

      <SortVisualizer
        algoName="Insertion Sort"
        sortFunction={insertionSort}
        mode="insertion"
      />

      <div style={{ marginTop: 20 }}>
        <Link to="/">
          <button style={{ padding: "8px 14px" }}>🏠 Back to Home</button>
        </Link>
      </div>
    </div>
  );
}
