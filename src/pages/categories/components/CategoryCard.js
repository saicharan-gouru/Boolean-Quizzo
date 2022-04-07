import "./CategoryCard.css";
import {useNavigate} from "react-router-dom";
import {fetchQuestionsByCategory} from "../../../services";
import {useQuestions} from "../../../contexts";

function CategoryCard({item}){

    const {title,difficulty,categoryNumber} = item;
    const navigate = useNavigate();
    const {questionsDispatch} = useQuestions();

    return(
        <div className="category-card">
            <h1>{title}</h1>
            <p>Difficulty : {difficulty}</p>
            <button className="button primary-blue" onClick={() => fetchQuestionsByCategory(categoryNumber,difficulty,navigate,questionsDispatch) }>Play now</button>
        </div>
    );
}

export {CategoryCard};