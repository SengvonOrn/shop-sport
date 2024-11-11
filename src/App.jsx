import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Navbar" element={<Navbar />} />
    </Routes>
  );
}
export default App;
