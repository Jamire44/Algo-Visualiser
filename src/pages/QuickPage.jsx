import { Link } from "react-router-dom";
import SortVisualizer from "../components/SortVisualizer";
import { quickSort } from "../algorithms/quickSort";

export default function QuickPage() {
  return (
    <div style={{ padding: 30 }}>
      <h1 style={{ marginBottom: 20 }}>Quick Sort</h1>

      <SortVisualizer
        algoName="Quick Sort"
        sortFunction={quickSort}
        mode="quick"
      />
    </div>
  );
}
