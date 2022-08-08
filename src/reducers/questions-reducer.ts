import { QuizState,QuizActionType } from "../types";

export function questionsReducer(state:QuizState, { type, payload }:QuizActionType) {
    switch (type) {
        case "ADD_QUESTIONS":
            return {...state, questions: [...payload], score: 0 }
        case "TRUE":
            return {...state, score: payload.correct_answer === "True" ? state.score + 10 : state.score };
        case "FALSE":
            return {...state, score: payload.correct_answer === "False" ? state.score + 10 : state.score }
        default:
            return state;
    }
}