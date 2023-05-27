import { UseFetchQuestions } from "../Hooks/UseFetchQuestions";
import { Loading } from "./Loading";
import { UseNextButton } from "../Hooks/UseNextButton";
import { NavLink} from "react-router-dom";
import { useEffect,useRef } from "react";



function LastQuestion() {
  const { list } = UseFetchQuestions();
  const { showNextButton } = UseNextButton();

  const useTrue = useRef(null)
  const useFalse = useRef(null)

   useEffect(()=>{
    if(useTrue.current){
     useTrue.current.style.color="green"
    } if( useFalse.current){
      useFalse.current.style.color="red"
    }
   })
 

  return (
    <div>
      {list && list.questions ? (
        <div>
          <p>{list.questions[2].question}</p>
          <div>
           <li>{list.questions[2]}</li>
           <li ref={useTrue}>True</li>
           <li ref={useFalse}>False</li>
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
