import Layout from "../components/Layout";
import Controls from "../components/Controls";
import SortVisualizer from "../components/SortVisualizer";

export default function BubblePage() {
  return (
    <Layout background="white">
      {/* Title */}
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "600",
          marginBottom: 20,
          color: "#111",
          textAlign: "center",
        }}
      >
        Bubble Sort
      </h1>

      {/* Visualizer at the top */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 30,
        }}
      >
        <SortVisualizer algorithm="bubble" />
      </div>

      {/* Controls directly under */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 20, // spacing between buttons
          marginBottom: 40,
        }}
      >
        <Controls />
      </div>
    </Layout>
  );
}
