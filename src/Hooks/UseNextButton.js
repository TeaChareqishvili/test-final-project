import { useEffect, useState, useRef } from "react";
import { UseProgress } from "./UseProgress";

const UseNextButton = () => {
  const [showNextButton, setShowNextButton] = useState(false);

  const quizRef = useRef(null);
  const {handleButtonClick} = UseProgress()

  useEffect(() => {
    const handleClick = (e) => {
      if (quizRef.current && quizRef.current.contains(e.target)) {
        setShowNextButton(true);
        handleButtonClick()
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handleButtonClick]);
  return {
    showNextButton,
    quizRef,
  };
};

export { UseNextButton };
