import "./styles/HomePageStyle.scss"
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <nav>
        <NavLink to="/QuizTest">
       
            <button className="start-quiz">Start Quiz</button>
        
        </NavLink>
      </nav>
    </div>
  );
}

export { Home };
