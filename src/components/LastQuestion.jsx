import { UseFetchQuestions } from "../Hooks/UseFetchQuestions";
import { Loading } from "./Loading";
import { UseNextButton } from "../Hooks/UseNextButton";
import { NavLink } from "react-router-dom";

function LastQuestion() {
  const { list } = UseFetchQuestions();
  const { showNextButton, wrapperRef, correctAnswerRef } = UseNextButton();
  return (
    <div>
      {list ? (
        <div>
          <p>{list.questions[2].question}</p>
          <div ref={wrapperRef}>
            <li ref={correctAnswerRef}>True</li>
            <li>False</li>
          </div>
        </div>
      ) : (
        <Loading />
      )}
      {showNextButton && (
        <NavLink to="/lastQuestion">
          <button>Next</button>
        </NavLink>
      )}
    </div>
  );
}

export { LastQuestion };
