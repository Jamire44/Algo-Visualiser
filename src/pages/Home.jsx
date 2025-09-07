import { Link } from "react-router-dom";

// 🖼 match the case of your actual files!
import bubbleImg from "../assets/bubble.png";
import insertionImg from "../assets/insertion.png";
import selectionImg from "../assets/selection.png";
import quickImg from "../assets/quick.png";
import Logo from "../components/Logo"; // ✅ this is your animated SVG component

export default function Home() {
  const algorithms = [
    { name: "Bubble Sort", path: "/bubble", img: bubbleImg },
    { name: "Insertion Sort", path: "/insertion", img: insertionImg },
    { name: "Selection Sort", path: "/selection", img: selectionImg },
    { name: "Quick Sort", path: "/quick", img: quickImg },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "black",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 40,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 60,
        }}
      >
          <Logo style={{ width: 300, height: 300 }} />
    </div>

      {/* Title */}
      <h1
        style={{
          color: "white",
          fontSize: "3rem",
          fontWeight: "600",
          marginBottom: 60,
          textAlign: "center",
          textShadow: "0 0 20px rgba(255,255,255,0.2)",
        }}
      >
        Algorithm Visualiser
      </h1>

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
          <Link
            key={algo.name}
            to={algo.path}
            style={{
              textDecoration: "none",
              borderRadius: 20,
              overflow: "hidden",
              background: "white",
              boxShadow: "0 0 20px rgba(255,255,255,0.1)",
              transform: "translateY(0)",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow =
                "0 0 40px rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(255,255,255,0.1)";
            }}
          >
            <img
              src={algo.img}
              alt={algo.name}
              style={{ width: "100%", height: 200, objectFit: "cover" }}
            />
            <div style={{ padding: 20, textAlign: "center" }}>
              <h2
                style={{
                  margin: 0,
                  fontSize: "1.25rem",
                  fontWeight: "500",
                  color: "#111",
                }}
              >
                {algo.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
