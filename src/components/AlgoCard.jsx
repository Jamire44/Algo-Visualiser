import { useState } from "react";
import { Link } from "react-router-dom";
import PreviewVisualizer from "./PreviewVisualizer";

export default function AlgoCard({ name, path, sortFunction, mode }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={path}
      style={{
        textDecoration: "none",
        borderRadius: 20,
        overflow: "hidden",
        background: "white",
        boxShadow: hovered
          ? "0 8px 20px rgba(0,0,0,0.15)"
          : "0 0 20px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ height: 200, position: "relative" }}>
        {/* Default title */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.25rem",
            fontWeight: "500",
            color: "#111",
            opacity: hovered ? 0 : 1,
            transition: "opacity 0.3s",
          }}
        >
          {name}
        </div>

        {/* Preview visualiser */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s",
          }}
        >
          <PreviewVisualizer sortFunction={sortFunction} mode={mode} active={hovered} />
        </div>
      </div>
    </Link>
  );
}
