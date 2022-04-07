import "./Question.css";
import {Link,useNavigate} from "react-router-dom";
import { fetchNextQuestion } from "../../../utils";
import {useCurrentQuestion} from "../../../contexts";
 
function Question({ 
    categoryname,
    currentQuestion,
    incorrectAnswers,
    correctAnswer,
    questionBank,
    score,})
{

        const options = [...incorrectAnswers, correctAnswer];
        const navigate = useNavigate();
        const {selectedOption, currentQuestionDispatch } = useCurrentQuestion();

        <div>
            <h1>{`welcome to ${categoryname} quiz`}</h1>
            <h2>Question : {currentQuestion+1}</h2>
            <h2>Score : {score}</h2>
            <div>
                <p>{questionBank[currentQuestion].question}</p>
                {options.map(option => <button onClick={()=>currentQuestionDispatch({
                    type: "CURRENT",
                    payload: {
                      currentQuestion: currentQuestion,
                      selectedOption: option,
                      correctAnswer: correctAnswer,
                      question: questionBank[currentQuestion],
                    },
                  })}>{option}</button>)}
            </div>

            <Link to="/categories"><button>Quit</button></Link>

            <button onClick={()=>fetchNextQuestion(currentQuestion,currentQuestionDispatch,selectedOption,navigate)}>
                Next
            </button>

        </div>
}

export {Question};