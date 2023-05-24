import { UseFetchQuestions } from "../Hooks/UseFetchQuestions";
import { Loading } from "./Loading";
import { UseNextButton } from "../Hooks/UseNextButton";
// import { NavLink } from "react-router-dom";

function NextQuestion() {
  const { list } = UseFetchQuestions();
  const {showNextButton,wrapperRef} = UseNextButton()

  return (
    <div>
    
      {list ? (
        <div ref={wrapperRef}>
          <li>{list.questions[1].question}</li>
          <li>{list.questions[1].options[0]}</li>
          <li>{list.questions[1].options[1]}</li>
          <li>{list.questions[1].options[2]}</li>
          <li>{list.questions[1].options[3]}</li>
        </div>
       
      ) : (
        <Loading />
      )}
      {showNextButton && <button>next</button>}
    </div>
  );
  
  
}

export { NextQuestion };
