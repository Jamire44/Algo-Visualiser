export default function BarChart({ numbers, active = [], sorted = [], pivot = null, mode }) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: 6,
          height: 220,
          // border: "1px solid #ddd",
          padding: 12,
          borderRadius: 8,
          background: "white"
        }}
      >
        {numbers.map((num, i) => {
          let color = "#7ec8ff";
  
          if (sorted.includes(i)) {
            color = "lightgreen";
          } else {
            if (mode === "bubble") {
              if (active[0] === i) color = "tomato";
              else if (active[1] === i) color = "gold";
            }
            if (mode === "insertion") {
              if (active[0] === i) color = "gold";
              else if (active[1] === i) color = "tomato";
            }
            if (mode === "selection") {
              if (active[0] === i) color = "purple";
              else if (active[1] === i) color = "tomato";
            }
            if (mode === "quick") {
              if (pivot === i) color = "gold";
              else if (active[0] === i) color = "tomato";
            }
          }
  
          return (
            <div
              key={i}
              style={{
                width: 25,
                height: num * 5,
                background: color,
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                borderRadius: "6px 6px 0 0",
                fontSize: 10,
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                transition: "height 0.3s, background 0.3s",
              }}
            >
              {num}
            </div>
          );
        })}
      </div>
    );
  }
  