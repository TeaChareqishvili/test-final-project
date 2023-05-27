import { NavLink } from "react-router-dom";
import { Loading } from "./Loading";
import { UseFetchQuestions } from "../Hooks/UseFetchQuestions";
import { UseNextButton } from "../Hooks/UseNextButton";
import { useState } from "react";

function Quiz() {
  const { list } = UseFetchQuestions();
  const { showNextButton } = UseNextButton();
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleItemClick = (index) => {
    setSelectedAnswer(index + 1);
  };

  return (
    <div>
      <h1>Quiz</h1>
      {list ? (
        <>
          <p>{list.questions[0].question}</p>
          <div>
            {list.questions[0].options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleItemClick(index)}
                style={{
                  color:
                    selectedAnswer === index + 1
                      ? index === 2
                        ? "green"
                        : "red"
                      : "initial",
                }}
              >
                {option}
              </li>
            ))}
          </div>
        </>
      ) : (
        <Loading />
      )}
      {showNextButton && (
        <NavLink to="/nextquestion">
          <button>Next</button>
        </NavLink>
      )}
    </div>
  );
}
export { Quiz };
