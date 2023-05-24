import { useState, useEffect } from "react"




const response =
"https://my-json-server.typicode.com/DanielBarbakadze/Advanced-JS-and-React-Basics/db";


const UseFetchQuestions=()=>{


  const [list, setList] = useState();


    useEffect(() => {
        fetch(response)
          .then((response) => response.json())
          .then((json) => setList(json));
      }, []);

      return {
        list
      };
    
}

export {UseFetchQuestions}