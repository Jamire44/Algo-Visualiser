export default function BarChart({ numbers, active, sorted }) {
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
            color = "lightgreen"; // sorted
          } else if (active[0] === i) {
            color = "tomato"; // comparing first
          } else if (active[1] === i) {
            color = "gold"; // comparing second
          }
  
          return (
            <div
              key={i}
              title={String(num)}
              style={{
                width: 25,
                height: num * 5,
                background: color,
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                borderRadius: 4,
                fontSize: 10,
              }}
            >
              {num}
            </div>
          );
        })}
      </div>
    );
  }
  