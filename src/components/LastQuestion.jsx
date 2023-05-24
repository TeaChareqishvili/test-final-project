import { UseFetchQuestions } from "../Hooks/UseFetchQuestions";
import { Loading } from "./Loading";

function LastQuestion() {
  const { list } = UseFetchQuestions();

  return (
    <div>
      {list ? (
        <div>
          <p>{list.questions[2].question}</p>
          <li>True</li>
          <li>False</li>
        </div>
      ) : (
        <Loading />
      )}
      {/* {showNextButton && <NavLink to="/lastQuestion">
            <button>Next</button>
          </NavLink>} */}
    </div>
  );
}

export { LastQuestion };
