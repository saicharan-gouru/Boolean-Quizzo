
import "./Results.css";
import {Link} from "react-router-dom";
import {useQuestions} from "../../contexts";
import {useDocumentTitle} from "../../customhooks";
import React from 'react'

function Results(){
    useDocumentTitle("Results");
    const {score,questions} = useQuestions();


    return(
        <div className="results">
            <h1>You have scored : {score} / 100</h1>
            <h3>You can explore more quizzes <Link to="/categories"> here...</Link></h3>
            {
                questions.map(item =>
                    <div className="question">
                        <h3>{item.question}</h3>
                        <h2>Correct answer : {item.correct_answer}</h2>
                    </div>
                )
            }
        </div>
    )
}

export {Results};