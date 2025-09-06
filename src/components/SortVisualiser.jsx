import { useState, useRef } from "react";
import BarChart from "./BarChart";
import { bubbleSort } from "../algorithms/bubbleSort";

export default function SortVisualizer() {
  const [numbers, setNumbers] = useState(() =>
    Array.from({ length: 20 }, () => Math.floor(Math.random() * 40) + 5)
  );
  const [active, setActive] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const speedRef = useRef(200);

  function shuffle() {
    if (isSorting) return;
    const a = [...numbers];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    setNumbers(a);
    setSorted([]); // clear sorted highlights
    setActive([]);
  }

  async function handleBubbleSort() {
    if (isSorting) return;
    setIsSorting(true);
    await bubbleSort(numbers, setNumbers, setActive, setSorted, speedRef.current);
    setIsSorting(false);
  }

  return (
    <div style={{ padding: 20, fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ marginBottom: 12 }}>Algorithm Visualiser</h1>

      <div style={{ marginBottom: 16 }}>
        <button onClick={shuffle} disabled={isSorting} style={{ marginRight: 8 }}>
          Shuffle
        </button>

        <button onClick={handleBubbleSort} disabled={isSorting}>
          Bubble Sort
        </button>

        <label style={{ marginLeft: 12 }}>
          Speed:
          <input
            type="range"
            min="50"
            max="800"
            defaultValue={200}
            onChange={(e) => (speedRef.current = Number(e.target.value))}
            style={{ marginLeft: 8, verticalAlign: "middle" }}
          />
        </label>
      </div>

      <BarChart numbers={numbers} active={active} sorted={sorted} />
    </div>
  );
}
