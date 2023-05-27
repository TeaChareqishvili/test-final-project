import { useEffect, useState,useRef} from "react";

const UseNextButton = () => {
  // const wrapperRef = useRef(null);
  const [showNextButton, setShowNextButton] = useState(false);
   const correctAnswerRef = useRef(null);
  //  const quizRef = useRef(null)
//   const alsoCorrectRef = useRef(null);
  
  useEffect(() => {
    const handleClick = (event) => {
      // if (wrapperRef.current && correctAnswerRef.current) {
      //   if (
      //     wrapperRef.current.contains(event.target) &&
      //     !correctAnswerRef.current.contains(event.target)
      //   ) {
          setShowNextButton(true);
        //   wrapperRef.current.style.color = "red";
        //   correctAnswerRef.current.style.color = "green";
        // //   alsoCorrectRef.current.style.color="green"
        // } else {
        //   setShowNextButton(true);
        //   wrapperRef.current.style.color = "red";
        //   correctAnswerRef.current.style.color = "green";
        // //   alsoCorrectRef.current.style.color="green"
        }
    //   }
    // };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return {
    showNextButton,
    // wrapperRef,
     correctAnswerRef,
    // alsoCorrectRef
  };
};

export { UseNextButton };
