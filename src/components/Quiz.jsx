import { NavLink } from "react-router-dom";
import { Loading } from "./Loading";
import { UseFetchQuestions } from "../Hooks/UseFetchQuestions";
import { UseNextButton } from "../Hooks/UseNextButton";
import { useEffect, useRef } from 'react';

function Quiz() {
  const { list } = UseFetchQuestions();
  const { showNextButton, wrapperRef } = UseNextButton();
  const correctAnswerRef = useRef(null);
  const wrongAnswerRef = useRef(null)

  useEffect(()=>{
    const handleClick = (e) => {
     if(wrongAnswerRef.current && correctAnswerRef.current){
      if(wrongAnswerRef.current.contains(e.target) && !correctAnswerRef.current.contains(e.target)){
        wrongAnswerRef.current.style.backgroundColor="red" 
      } else if(correctAnswerRef.current.contains(e.target)&& !wrongAnswerRef.current.contains(e.target)){
        correctAnswerRef.current.style.backgroundColor="green" 
      }
     } // ar mushaobs :(((( 
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });


  return (
    <div>
      <h1>Quiz</h1>
      {list ? (
        <div ref={wrapperRef}>
        
          <p>{list.questions[0].question}</p>
          <div ref={wrongAnswerRef}>
          <li>{list.questions[0].options[0]}</li>
          <li >{list.questions[0].options[1]}</li>
          <li ref={correctAnswerRef}>{list.questions[0].options[2]}</li>
          <li >{list.questions[0].options[3]}</li>
          </div>
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
  );
}

export { Quiz };
