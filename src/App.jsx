import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import KnowledgeHubPage from "./pages/KnowledgeHubPage";

function App() {
  return (
    <BrowserRouter basename="/my-portfolio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/knowledge"
          element={<KnowledgeHubPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;