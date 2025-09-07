import SortVisualizer from "../components/SortVisualizer";
import { bubbleSort } from "../algorithms/bubbleSort";

export default function InsertionPage() {
  return (
    <div style={{ padding: 30, backgroundColor: "white", minHeight: "100vh"}}>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-[system-ui] text-center mb-6">Bubble Sort</h1>
      <SortVisualizer
        algoName="Bubble Sort"
        sortFunction={bubbleSort}
        mode="bubble"
      />
    </div>
  );
}
