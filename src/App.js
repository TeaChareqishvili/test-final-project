import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { SecondPage } from "./components/SecondPage";
import { LastQuestion } from "./components/LastQuestion";
import { QuizTest } from "./components/QuizTest";
function App() {
  return (
    <div className="App">
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiztest" element={<QuizTest />} />
        <Route path="/secondpage" element={<SecondPage/>} />
        <Route path="/lastQuestion" element={<LastQuestion/>} />
      </Routes>
    </div>
  );
}

export default App;
