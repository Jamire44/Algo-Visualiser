export default function BarChart({ numbers }) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: 8,
          height: 220,
          border: "1px solid #ddd",
          padding: 12,
        }}
      >
        {numbers.map((num, i) => (
          <div
            key={i}
            title={String(num)}
            style={{
              width: 40,
              height: num * 15,
              background: "#7ec8ff",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              borderRadius: 4,
              fontSize: 12,
            }}
          >
            {num}
          </div>
        ))}
      </div>
    );
  }
  