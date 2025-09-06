import React, { useState } from "react";

export default function SortingVisualizer() {
  const [array, setArray] = useState(generateArray());

  function generateArray() {
    return Array.from({ length: 20 }, () =>
      Math.floor(Math.random() * 200) + 20
    );
  }

  function resetArray() {
    setArray(generateArray());
  }

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-xl font-bold mb-4">Sorting Visualizer</h1>
      <div className="flex gap-1 mb-4">
        {array.map((value, idx) => (
          <div
            key={idx}
            style={{
              height: `${value}px`,
              width: "20px",
              backgroundColor: "teal",
            }}
          ></div>
        ))}
      </div>
      <button
        onClick={resetArray}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Generate New Array
      </button>
    </div>
  );
}
