import "./styles/HomePageStyle.scss";
import { UseProgress } from "../Hooks/UseProgress";

function ProgressBarQuiz() {
  const {getColor, progress } = UseProgress();

  return (
    <div className="container">
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%`, backgroundColor: getColor() }}
        >
          {""}
        </div>
      </div>
      <div className="progress-label">{progress}%</div>
      {/* <button onClick={handleButtonClick}>progress</button> */}
   
    </div>
  );
}

export { ProgressBarQuiz };
