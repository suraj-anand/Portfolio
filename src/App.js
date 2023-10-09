import { Routes, Route } from "react-router-dom";
import "./styles/App.css"
import Index from "./pages/Index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="*" element={<Index />} />
    </Routes>
  );
}

export default App;
