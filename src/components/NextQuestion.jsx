import { UseFetchQuestions } from "../Hooks/UseFetchQuestions";
import { Loading } from "./Loading";
import { UseNextButton } from "../Hooks/UseNextButton";
 import { NavLink } from "react-router-dom";
 import { useState } from "react";

function NextQuestion() {
  const { list } = UseFetchQuestions();
  const {showNextButton} = UseNextButton()
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleItemClick = (index) => {
    setSelectedAnswer(index + 1);
  };

  return (
    <div>
      <h1>Next Question</h1>
      {list ? (
        <>
          <p>{list.questions[1].question}</p>
          <div>
            {list.questions[1].options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleItemClick(index)}
                style={{
                  color:
                    selectedAnswer === index + 1
                      ? (index === 1 || index === 3)
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
      {showNextButton && <NavLink to="/lastQuestion">
          <button>Next</button>
        </NavLink>}
    </div>
  );
  
  
}

export { NextQuestion };
