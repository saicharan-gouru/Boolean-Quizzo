import "./Quiz.css";
import {useQuestions,useCurrentQuestion} from "../../contexts";
import {Question} from "./components/Question";

function Quiz(){


    const {questions} = useQuestions();

    const {currentQuestion,score} = useCurrentQuestion();

    return(
        <div>
            <h1>Play Quiz</h1>
            {
            questions ?
            <Question
            categoryname={questions[0].category}
            currentQuestion={currentQuestion}
            incorrectAnswers={questions[currentQuestion].incorrect_answers}
            correctAnswer={questions[currentQuestion].correct_answer}
            questionBank={questions}
            score={score}
            /> : console.log("wait")
            }

        </div>
    );
}

export {Quiz};