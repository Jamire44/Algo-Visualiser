export default function BarChart({ numbers, active = [], sorted = [], pivot = null, mode }) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: 6,
          height: 220,
          border: "1px solid #ddd",
          padding: 12,
          borderRadius: 8,
        }}
      >
        {numbers.map((num, i) => {
          let color = "#7ec8ff"; // default blue
  
          if (sorted.includes(i)) {
            color = "lightgreen"; // ✅ sorted always green
          } else {
            // 🎨 Algorithm-specific color logic
            if (mode === "bubble") {
              if (active[0] === i) color = "tomato"; // comparing first
              else if (active[1] === i) color = "gold"; // comparing second
            }
            if (mode === "insertion") {
              if (active[0] === i) color = "gold"; // key
              else if (active[1] === i) color = "tomato"; // element being shifted
            }
            if (mode === "selection") {
              if (active[0] === i) color = "purple"; // current min
              else if (active[1] === i) color = "tomato"; // candidate
            }
            if (mode === "quick") {
              if (pivot === i) color = "gold"; // pivot
              else if (active[0] === i) color = "tomato"; // compared element
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
                borderRadius: 4,
                fontSize: 10,
                transition: "height 0.25s, background 0.15s",
              }}
            >
              {num}
            </div>
          );
        })}
      </div>
    );
  }
  