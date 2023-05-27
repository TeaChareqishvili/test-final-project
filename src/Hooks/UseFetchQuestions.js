import { useState, useEffect } from "react";

const apiUrl =
"https://opentdb.com/api.php?amount=5&category=20&type=multiple";

const UseFetchQuestions = () => {
  const [test, setList] = useState(null);
 

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => setList(json));
  }, []);

  
 
  return {
    test,
  };
};

export { UseFetchQuestions };
