import { useQuestions } from "../../contexts";
import "./Results.css";
import {Link} from "react-router-dom";

function Results(){

    const {score} = useQuestions();

    return(
        <div className="results">
            <h1>You have scored : {score} / 100</h1>
            <h3>You can explore more quizzes <Link to="/categories"> here...</Link></h3>
        </div>
    )
}

export {Results};