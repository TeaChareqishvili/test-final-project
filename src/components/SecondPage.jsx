import { Loading } from "./Loading";
import { UseFetchQuestions } from "../Hooks/UseFetchQuestions";
import { UseNextButton } from "../Hooks/UseNextButton";
import { NavLink } from "react-router-dom";
import { UseColors } from "../Hooks/UseColors";
import "./styles/QuestionStyles.scss"


function SecondPage(){

    const { test } = UseFetchQuestions();
    const { showNextButton,quizRef } = UseNextButton();
    const { handleOptionChange, checkAnswer } = UseColors(test);
  
    return (
        <div className="quiz-wrapper" ref={quizRef}>
        {test ? (
          <div className="quiz">
            <p className="title">{test.results[1].category}</p>
            <p className="question">{test.results[1].question}</p>
  
            <label
              style={{ color: checkAnswer(test.results[1].incorrect_answers[0]) }}
            >
              <input
                type="radio"
                name="god"
                value={test.results[1].incorrect_answers[0]}
                onChange={handleOptionChange}
              />
              {test.results[1].incorrect_answers[0]}
            </label>
            <label
              style={{ color: checkAnswer(test.results[1].incorrect_answers[1]) }}
            >
              <input
                type="radio"
                name="god"
                value={test.results[1].incorrect_answers[1]}
                onChange={handleOptionChange}
              />
              {test.results[1].incorrect_answers[1]}
            </label>
            <label
              style={{ color: checkAnswer(test.results[1].incorrect_answers[2]) }}
            >
              <input
                type="radio"
                name="god"
                value={test.results[1].incorrect_answers[2]}
                onChange={handleOptionChange}
              />
              {test.results[1].incorrect_answers[2]}
            </label>
            <label style={{ color: checkAnswer(test.results[1].correct_answer) }}>
              <input
                type="radio"
                name="god"
                value={test.results[1].correct_answer}
                onChange={handleOptionChange}
              />
              {test.results[1].correct_answer}
            </label>
          </div>
        ) : (
          <Loading />
        )}
        {showNextButton && (
          <NavLink to="/nextquestion">
            <button>Next</button>
          </NavLink>
        )}
      </div>
    )
}

export {SecondPage}