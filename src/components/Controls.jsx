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
                    background: "rgb(57, 57, 57)",
                    color: "white",
                    border: "none",
                    padding: "10px 30px",
                    borderRadius: "12px",
                    fontSize: "0.95rem",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = "black"; 
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgb(57, 57, 57)";
                }}>
                Shuffle
            </button>            

            <button
                onClick={onRun}
                disabled={isSorting}
                style={{
                    background: "rgb(57, 57, 57)",          
                    color: "white",
                    border: "none",
                    padding: "10px 30px",
                    borderRadius: "12px",
                    fontSize: "0.95rem",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = "black";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgb(57, 57, 57)";
                }}
                >
                Run
            </button>

            <label disabled={isSorting} style={{ marginLeft: "auto", fontSize: 15 }}>
                Speed:
                <input
                type="range"
                min="50"
                max="600"
                defaultValue={200}
                onChange={(e) => onSpeedChange(Number(e.target.value))}
                style={{ marginLeft: 5 }}
                />
            </label>

            <Link to="/">
                <button
                    style={{
                        background: "rgb(57, 57, 57)",          
                        color: "white",
                        border: "none",
                        padding: "10px 30px",
                        borderRadius: "12px",
                        fontSize: "0.95rem",
                        fontWeight: "500",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = "black";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgb(57, 57, 57)";
                    }}

                >
                Home
                </button>
            </Link>
        </div>
    )
}