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
    </div>
  );
}
