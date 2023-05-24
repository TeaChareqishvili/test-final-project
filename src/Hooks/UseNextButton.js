import { useEffect, useState, useRef } from "react";


const UseNextButton=()=>{


    const wrapperRef = useRef(null)
    const [showNextButton, setShowNextButton] = useState(false);
    useEffect(() => {
      const handleClick = (event) => {
        if (wrapperRef.current && wrapperRef.current.contains(event.target)) {
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
        wrapperRef
      };

}

export {UseNextButton}