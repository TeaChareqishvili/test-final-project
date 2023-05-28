import { useState } from "react"


const UseColors = (test) => {
    const [selectedOption, setSelectedOption] = useState("");

  
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
      
   
    };
  
    const checkAnswer = (answer) => {
      if (selectedOption === answer) {
        return selectedOption === test.results[0].correct_answer ? 'green' : 'red';
    
    }
      else {
        return 'initial';
      }

    };

 
    
   

    return {
      handleOptionChange,
      checkAnswer,
     
    };
  };
  
  export { UseColors };
  