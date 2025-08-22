import { Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Useless/Contact";
import ProjectDetails from "./components/ProjectDetails";

import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
    </Routes>
  );
}

export default App;
