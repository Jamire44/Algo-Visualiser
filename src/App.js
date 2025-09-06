import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BubblePage from "./pages/BubblePage";
import InsertionPage from "./pages/InsertionPage";
import SelectionPage from "./pages/SelectionPage";
import QuickPage from "./pages/QuickPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bubble" element={<BubblePage />} />
        <Route path="/insertion" element={<InsertionPage />} />
        <Route path="/selection" element={<SelectionPage />} />
        <Route path="/quick" element={<QuickPage />} />
      </Routes>
    </Router>
  );
}
