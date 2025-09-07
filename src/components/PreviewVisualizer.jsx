import { useEffect, useState } from "react";

export default function PreviewVisualizer({ sortFunction, mode, active }) {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    if (!active) return; // 👈 only run when hovered

    function randomArray() {
      return Array.from({ length: 6 }, () => Math.floor(Math.random() * 30) + 5);
    }

    async function runPreview() {
      const arr = randomArray();
      setNumbers(arr);
      await sortFunction(arr, setNumbers, () => {}, () => {}, () => {}, 60);
    }

    runPreview();
  }, [active, sortFunction]);

  return (
    <div className="flex items-end justify-center gap-1 h-24 w-full">
      {numbers.map((num, i) => (
        <div
          key={i}
          style={{ height: `${num * 2}px` }}
          className={`w-4 rounded-sm transition-all duration-200 ${
            mode === "bubble"
              ? "bg-sky-400"
              : mode === "insertion"
              ? "bg-green-400"
              : mode === "selection"
              ? "bg-purple-400"
              : "bg-red-400"
          }`}
        ></div>
      ))}
    </div>
  );
}
