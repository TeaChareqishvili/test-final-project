import { useEffect, useState,useRef} from "react";

const UseNextButton = () => {
  // const wrapperRef = useRef(null);
  const [showNextButton, setShowNextButton] = useState(false);
  //  const correctAnswerRef = useRef(null);
    const quizRef = useRef(null)
//   const alsoCorrectRef = useRef(null);
  
useEffect(() => {
  const handleClick = (e) => {
    if (quizRef.current && quizRef.current.contains(e.target)) {
      setShowNextButton(true);
    }
  };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return {
    showNextButton,
    quizRef
    // wrapperRef,
    //  correctAnswerRef,
    // alsoCorrectRef
  };
};

export { UseNextButton };
