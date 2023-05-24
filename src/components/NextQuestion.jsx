import { UseFetchQuestions } from "../Hooks/UseFetchQuestions";
import { Loading } from "./Loading";
import { UseNextButton } from "../Hooks/UseNextButton";
 import { NavLink } from "react-router-dom";

function NextQuestion() {
  const { list } = UseFetchQuestions();
  const {showNextButton,wrapperRef} = UseNextButton()

  return (
    <div>
    
      {list ? (
        <div ref={wrapperRef}>
          <p>{list.questions[1].question}</p>
          <li>{list.questions[1].options[0]}</li>
          <li>{list.questions[1].options[1]}</li>
          <li>{list.questions[1].options[2]}</li>
          <li>{list.questions[1].options[3]}</li>
        </div>
       
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
