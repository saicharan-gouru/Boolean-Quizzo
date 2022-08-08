import { createContext, useContext, useReducer } from "react";
import { questionsReducer } from "../reducers";
import React from 'react';
import { ReactChildrenType,QuizContextType } from "../types";



const QuestionsContext = createContext({} as QuizContextType );

function QuestionsProvider({children}:ReactChildrenType){

    const [questionsState,questionsDispatch] = useReducer(questionsReducer,{questions:[],score:0});

    return(
        <QuestionsContext.Provider value={{questionsState,questionsDispatch}}>
            {children}
        </QuestionsContext.Provider>
    );
}

const useQuestions = () => useContext(QuestionsContext);

export { QuestionsProvider, useQuestions};
