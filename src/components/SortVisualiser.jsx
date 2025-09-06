import { useState, useRef } from "react";
import BarChart from "./BarChart";
import { bubbleSort } from "../algorithms/bubbleSort";

export default function SortVisualizer() {
  const [numbers, setNumbers] = useState([5, 3, 8, 1, 2]);
  const [isSorting, setIsSorting] = useState(false);
  const speedRef = useRef(300);

  function shuffle() {
    if (isSorting) return;
    const a = [...numbers];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    setNumbers(a);
  }

  async function handleBubbleSort() {
    if (isSorting) return;
    setIsSorting(true);
    await bubbleSort(numbers, setNumbers, speedRef.current);
    setIsSorting(false);
  }

  return (
    <div style={{ padding: 20, fontFamily: "system-ui, sans-serif" }}>
      <h1 className="text-xl font-bold mb-4">Algorithm Visualiser</h1>

      <div style={{ marginBottom: 16 }}>
        <button
          onClick={shuffle}
          disabled={isSorting}
          style={{ marginRight: 8, padding: "8px 14px" }}
        >
          Shuffle
        </button>

        <button
          onClick={handleBubbleSort}
          disabled={isSorting}
          style={{ padding: "8px 14px" }}
        >
          Bubble Sort
        </button>
      </div>

      <BarChart numbers={numbers} />
    </div>
  );
}
