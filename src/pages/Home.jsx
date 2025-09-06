import { Link } from "react-router-dom";

// Import your images (case-sensitive!)
import bubbleImg from "../assets/bubble.png";
import insertionImg from "../assets/insertion.png";
import selectionImg from "../assets/selection.png";
import quickImg from "../assets/quick.png";

export default function Home() {
  const algorithms = [
    { name: "Bubble Sort", path: "/bubble", img: bubbleImg },
    { name: "Insertion Sort", path: "/insertion", img: insertionImg },
    { name: "Selection Sort", path: "/selection", img: selectionImg },
    { name: "Quick Sort", path: "/quick", img: quickImg },
  ];

  return (
    <div style={{ padding: 30, fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ marginBottom: 20, textAlign: "center" }}>
        Algorithm Visualiser
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 20,
          maxWidth: 700,
          margin: "0 auto",
        }}
      >
        {algorithms.map((algo) => (
          <Link
            key={algo.name}
            to={algo.path}
            style={{
              textDecoration: "none",
              border: "1px solid #ddd",
              borderRadius: 8,
              overflow: "hidden",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={algo.img}
              alt={algo.name}
              style={{ width: "100%", height: 180, objectFit: "cover" }}
            />
            <div style={{ padding: 12, textAlign: "center" }}>
              <h2 style={{ margin: 0, fontSize: 18, color: "#333" }}>
                {algo.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
