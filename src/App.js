import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { SecondPage } from "./components/SecondPage";
import { QuizTest } from "./components/QuizTest";
import { ThirdPage } from "./components/ThirdPage";
function App() {
  return (
    <div className="App">
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiztest" element={<QuizTest />} />
        <Route path="/secondpage" element={<SecondPage/>} />
        <Route path="/thirdpage" element={<ThirdPage/>} />
      </Routes>
    </div>
  );
}

export default App;
