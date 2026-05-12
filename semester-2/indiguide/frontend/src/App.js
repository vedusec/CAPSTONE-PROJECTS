import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import CategoryPage from "@/pages/CategoryPage";
import ScenarioPage from "@/pages/ScenarioPage";

function App() {
  return (
    <div className="app-shell">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/scenario/:slug/:scenarioId" element={<ScenarioPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
