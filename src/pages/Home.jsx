import { Link } from "react-router-dom";
import { bubbleSort } from "../algorithms/bubbleSort";
import { insertionSort } from "../algorithms/insertionSort";
import { selectionSort } from "../algorithms/selectionSort";
import { quickSort } from "../algorithms/quickSort";
import Logo from "../components/Logo";
import PreviewVisualizer from "../components/PreviewVisualizer";
import AlgoCard from "../components/AlgoCard"; // ✅ new component
import { useState } from "react";

export default function Home() {
  const algorithms = [
    { name: "Bubble Sort", path: "/bubble", sortFunction: bubbleSort, mode: "bubble" },
    { name: "Insertion Sort", path: "/insertion", sortFunction: insertionSort, mode: "insertion" },
    { name: "Selection Sort", path: "/selection", sortFunction: selectionSort, mode: "selection" },
    { name: "Quick Sort", path: "/quick", sortFunction: quickSort, mode: "quick" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "white",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 40,
      }}
    >
      {/* Title */}
      <h1
        style={{
          color: "black",
          fontSize: "3rem",
          fontWeight: "600",
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        Algorithm Visualiser
      </h1>

      <div
        style={{
          position: "fixed",
          top: 20,
          left: 20,
          zIndex: 50,
        }}
      >
        <Logo style={{ width: 80, height: 80 }} />
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 40,
          maxWidth: 900,
          width: "100%",
        }}
      >
        {algorithms.map((algo) => (
          <AlgoCard key={algo.name} {...algo} />
        ))}
      </div>
    </div>
  );
}
