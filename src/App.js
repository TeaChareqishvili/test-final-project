import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Quiz } from "./components/Quiz";
import { NextQuestion } from "./components/NextQuestion";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/nextquestion" element={<NextQuestion/>} />
      </Routes>
    </div>
  );
}

export default App;
