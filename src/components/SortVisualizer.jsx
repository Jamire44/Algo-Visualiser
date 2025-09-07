import { useState, useRef } from "react";
import BarChart from "./BarChart";
import Controls from "./Controls";

export default function SortVisualizer({ algoName, sortFunction, mode }) {
  const [numbers, setNumbers] = useState(() =>
    Array.from({ length: 15 }, () => Math.floor(Math.random() * 40) + 5)
  );
  const [active, setActive] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [pivot, setPivot] = useState(null);
  const [isSorting, setIsSorting] = useState(false);
  const speedRef = useRef(200);

  function handleSpeedChange(val) {
    speedRef.current = val;
  }  

  function shuffle() {
    if (isSorting) return;
    const a = [...numbers];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    setNumbers(a);
    setSorted([]);
    setActive([]);
    setPivot(null);
  }

  async function runSort() {
    if (isSorting) return;
    setIsSorting(true);
    await sortFunction(numbers, setNumbers, setActive, setSorted, setPivot, speedRef.current);
    setIsSorting(false);
  }

  return (
    <div style={{ padding: 30,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 20px",
    background: "#f9fafc",
    fontFamily: "system-ui, sans-serif",
    }}>
      <Controls
        onShuffle={shuffle}
        onRun={runSort}
        isSorting={isSorting}
        algoName={algoName}
        onSpeedChange={ (val) => (speedRef.current = val)}
      />


      <BarChart numbers={numbers} active={active} sorted={sorted} pivot={pivot} mode={mode} />
    </div>
  );
}
