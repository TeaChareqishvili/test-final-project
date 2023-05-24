
import { NavLink } from "react-router-dom";
import { Loading } from "./Loading";
import { UseFetchQuestions } from "../Hooks/UseFetchQuestions";
import { UseNextButton } from "../Hooks/UseNextButton";


function Quiz() {
  
 const {list} = UseFetchQuestions()
 const {showNextButton,wrapperRef} = UseNextButton()


  

  return (
    <div>
      <h1>Quiz</h1>
      {list ? (
        <div ref={wrapperRef}>
          <li>{list.questions[0].question}</li>
          <li>{list.questions[0].options[0]}</li>
          <li>{list.questions[0].options[1]}</li>
          <li>{list.questions[0].options[2]}</li>
          <li>{list.questions[0].options[3]}</li>
        </div>
       
      ) : (
        <Loading />
      )}
      {showNextButton &&   <NavLink to="/nextquestion">
        <button>Next</button>
        </NavLink>}
    </div>
  );
}

export { Quiz };
