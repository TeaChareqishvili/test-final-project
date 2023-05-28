import  { useEffect, useState } from 'react';

const apiUrl = "https://opentdb.com/api.php?amount=5&category=20&type=multiple";

const UseFetchQuestions = () => {
  const [test, setTest] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setTest(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (test) {
      localStorage.setItem('quizData', JSON.stringify(test));
      console.log(localStorage.getItem('quizData'));
    }
  }, [test]);

  return {
    test,
  };
};

export { UseFetchQuestions };

  

  
 
