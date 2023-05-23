import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Quiz } from "./components/Quiz";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        {/* <Route path="/admin/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </div>
  );
}

export default App;
