import { createContext, useContext, useReducer } from "react";
import { questionsReducer } from "../reducers";

const QuestionsContext = createContext();

function QuestionsProvider({children}){

    const [{questions},questionsDispatch] = useReducer(questionsReducer,{questions:[]});

    return(
        <QuestionsContext.Provider value={{questions,questionsDispatch}}>
            {children}
        </QuestionsContext.Provider>
    );
}

const useQuestions = () => useContext(QuestionsContext);

export { QuestionsProvider, useQuestions};
