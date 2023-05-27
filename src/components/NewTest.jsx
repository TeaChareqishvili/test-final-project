


import React, { useState, useEffect } from 'react';

function NewTest() {
    const [test, setTest] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
  
    const apiUrl = 'https://opentdb.com/api.php?amount=5&category=20&type=multiple';
  
    useEffect(() => {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((json) => {
          setTest(json);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log('Error fetching data:', error);
          setIsLoading(false);
        });
    }, []);
  
    useEffect(() => {
      console.log(test); // Check the fetched data in the console
    }, [test]);
  
    return (
      <div className="test-wrapper">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            {test && test.results && test.results.length > 0 ? (
              <>
                <p>{test.results[0].category}</p>
                <p>{test.results[0].question}</p>
              </>
            ) : (
              <div>No data available</div>
            )}
          </>
        )}
      </div>
    );
  }
  
  export { NewTest };
  