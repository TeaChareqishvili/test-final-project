import "./HomePageStyle.scss";
import { NavLink } from "react-router-dom";


function Home(){
    return (
        <div className="home-page">
            <h1>Home Page</h1>
           
        <nav>
        <NavLink to="/Quiz">
        <button>Start Quiz</button>
        </NavLink>
        </nav>
        </div>
    )
}

export {Home}