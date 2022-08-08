import { createContext, useContext, useReducer } from "react";
import { questionsReducer } from "../reducers";
import React from 'react';

const QuestionsContext = createContext();

function QuestionsProvider({children}){

    const [{questions,score},questionsDispatch] = useReducer(questionsReducer,{questions:[],score:0});

    return(
        <QuestionsContext.Provider value={{questions,questionsDispatch,score}}>
            {children}
        </QuestionsContext.Provider>
    );
}

const useQuestions = () => useContext(QuestionsContext);

export { QuestionsProvider, useQuestions};
