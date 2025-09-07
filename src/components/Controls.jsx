import { Link } from "react-router-dom";

export default function Controls({ onShuffle, onRun, isSorting, algoName, onSpeedChange}) {
    return (
        <div style={{ 
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px 16px",
            borderRadius: 8,
            background: "#fff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            marginBottom: 24,
            }}>
            <button 
                onClick={onShuffle} 
                disabled={isSorting} 
                style={{
                    padding: "8px 14px",
                    borderRadius: 6,
                    border: "none",
                    background: "#6c757d",
                    color: "white",
                    cursor: "pointer",
                    }}>
                Shuffle
            </button>

            <button
                style={{
                    background: "#007aff",          // iOS blue
                    color: "white",
                    border: "none",
                    padding: "10px 18px",
                    borderRadius: "12px",
                    fontSize: "0.95rem",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#005ecb"; // darker blue on hover
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#007aff";
                }}
                >
                Run
            </button>

            <label style={{ marginLeft: "auto", fontSize: 14 }}>
                Speed:
                <input
                type="range"
                min="50"
                max="800"
                defaultValue={200}
                onChange={(e) => onSpeedChange(Number(e.target.value))}
                style={{ marginLeft: 8 }}
                />
            </label>
        </div>
    )
}