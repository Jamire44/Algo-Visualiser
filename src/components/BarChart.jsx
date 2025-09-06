export default function BarChart({ numbers, active }) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: 8,
          height: 220,
          border: "1px solid #ddd",
          padding: 12,
          borderRadius: 8,
        }}
      >
        {numbers.map((num, i) => {
          const isActive = active.includes(i);
          return (
            <div
              key={i}
              style={{
                width: 30,
                height: num * 5,
                background: isActive ? "tomato" : "#7ec8ff",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                borderRadius: 4,
                fontSize: 10,
                color: "black",
              }}
            >
              {num}
            </div>
          );
        })}
      </div>
    );
  }
  