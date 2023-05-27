
import "./HomePageStyle.scss";
import { useState } from "react";


function ProgressBarQuiz(){


    const[progress, setProgress] = useState(0)

    const handleButtonClick =()=>{
        if(progress <100){
            setProgress(progress+20)
        }
        console.log('hh')
    }; 

    const getColor =()=>{
        if(progress <40){
            return "red"
        } else if( progress< 70){
            return 'orange'
        } else {
            return "green"
        }
    }

    return (
        <div className="container">
            <div className="progress-bar">
                <div className="progress-bar-fill" style = {{width: `${progress}%`, backgroundColor: getColor()}}>{''}</div>
            </div>
            <div className="progress-label">{progress}%</div>
            <button onClick={handleButtonClick}>progress</button>
            <button>reset</button>
             </div>
    )
}

export {ProgressBarQuiz}