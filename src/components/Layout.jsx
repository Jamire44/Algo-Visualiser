import Logo from "./Logo";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "black",
        color: "white",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        padding: 20,
      }}
    >
      {/* Header with logo + optional home link */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 40,
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo size={60} />
        </Link>
      </header>

      {/* Page content */}
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
      </main>
    </div>
  );
}
