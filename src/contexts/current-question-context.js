import { createContext, useContext, useReducer } from "react";
import { currentQuestionReducer } from "../reducers";

const CurrentQuestionContext = createContext();

function CurrentQuestionContextProvider({children}){

    const [{
        currentQuestion,
        score,
        selectedOption,
        question,
      },currentQuestionDispatch] = useReducer(currentQuestionReducer,{
        currentQuestion: 0,
        score: 0,
        selectedOption: "",
        question: "",
      })

    return(
        <CurrentQuestionContext.Provider value={{currentQuestion,score,selectedOption,question,currentQuestionDispatch}}>
            {children}
        </CurrentQuestionContext.Provider>
    );
}

const useCurrentQuestion = () => useContext(CurrentQuestionContext);

export {CurrentQuestionContextProvider,useCurrentQuestion};