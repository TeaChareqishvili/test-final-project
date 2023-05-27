import { Loading } from "./Loading";
import { UseFetchQuestions } from "../Hooks/UseFetchQuestions";
import { UseNextButton } from "../Hooks/UseNextButton";
import { NavLink } from "react-router-dom";
import { UseColors } from "../Hooks/UseColors";

function QuizTest() {
  const { test } = UseFetchQuestions();
  const { showNextButton } = UseNextButton();
  const { handleOptionChange, checkAnswer } = UseColors(test);

  return (
    <div>
      {test ? (
        <>
          <p>{test.results[0].category}</p>
          <p>{test.results[0].question}</p>

          <label
            style={{ color: checkAnswer(test.results[0].incorrect_answers[0]) }}
          >
            <input
              type="radio"
              name="god"
              value={test.results[0].incorrect_answers[0]}
              onChange={handleOptionChange}
            />
            {test.results[0].incorrect_answers[0]}
          </label>
          <label
            style={{ color: checkAnswer(test.results[0].incorrect_answers[1]) }}
          >
            <input
              type="radio"
              name="god"
              value={test.results[0].incorrect_answers[1]}
              onChange={handleOptionChange}
            />
            {test.results[0].incorrect_answers[1]}
          </label>
          <label
            style={{ color: checkAnswer(test.results[0].incorrect_answers[2]) }}
          >
            <input
              type="radio"
              name="god"
              value={test.results[0].incorrect_answers[2]}
              onChange={handleOptionChange}
            />
            {test.results[0].incorrect_answers[2]}
          </label>
          <label style={{ color: checkAnswer(test.results[0].correct_answer) }}>
            <input
              type="radio"
              name="god"
              value={test.results[0].correct_answer}
              onChange={handleOptionChange}
            />
            {test.results[0].correct_answer}
          </label>
        </>
      ) : (
        <Loading />
      )}
      {showNextButton && (
        <NavLink to="/secondpage">
          <button>Next</button>
        </NavLink>
      )}
    </div>
  );
}

export { QuizTest };