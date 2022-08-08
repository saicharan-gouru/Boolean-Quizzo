type Question = {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

type Category = {
    id:number,
    categoryNumber : number,
    difficulty : string,
    title:string
}

type Rule = {
    id:number,
    title:string
}

type QuizState = {
    questions :Question[],
    score : number
}

type ADD_QUESTIONS = {
    type:"ADD_QUESTIONS",
    payload:Question[]
}

type TRUE = {
    type:"TRUE",
    payload:Question
}

type FALSE = {
    type:"FALSE",
    payload:Question
}

type QuizActionType = | ADD_QUESTIONS | TRUE | FALSE ;

type QuizContextType = {
    questionsState : QuizState,
    questionsDispatch : React.Dispatch<QuizActionType>
}




export {Question,QuizState,Category,QuizContextType,QuizActionType,Rule}