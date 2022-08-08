import "./Quiz.css";
import {Link} from "react-router-dom";
import {useQuestions} from "../../contexts";
import {useDocumentTitle} from "../../customhooks";
import React from 'react';


function Quiz():JSX.Element{
    useDocumentTitle("Quiz");
    const {questionsState, questionsDispatch} = useQuestions();
    const {questions} = questionsState;
    return(
        <div className="questions-container">
            <h1>Play Quiz</h1>
            <Link to="/categories"><button className="button primary-red">Quit</button></Link>
            {
            questions.map(item =>
            <div className="question">
                <h3>{item.question}</h3>
                <label><input type="radio" name={item.question} onChange={() => questionsDispatch({type:"TRUE",payload:item})} />True </label>
                <label><input type="radio"  name={item.question} onChange={() =>{ questionsDispatch({type:"FALSE",payload:item}) }} />False</label>
            </div>
            )
            }
            <Link to="/results"><button className="button primary-green">Sumit and Get Results</button></Link>
        </div>
    );
}

export {Quiz};