import {  useState } from "react";


const UseProgress = ()=>{
     
   
    const[progress, setProgress] = useState(0)

    const handleButtonClick =()=>{
       
        if(progress <100){
            setProgress(progress+20)
           
        }
        console.log('hh')
    }; 

    const getColor =()=>{
        console.log('bh')
        if(progress <=20){
            return  '#FF0000'
        } else if(  progress<=40){
            return  '#FF4500'
        } else if( progress<=60){
            return  '#FFA500'
        } else if(progress <=80){
            return   '#6bab46'
        } else {
            return   '#008000'
        }
    }

    return {
        handleButtonClick,
        getColor,
        progress
    }

}

export {UseProgress}