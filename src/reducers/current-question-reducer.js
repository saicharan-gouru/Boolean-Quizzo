function currentQuestionReducer(state, { type, payload }) {
    switch (type) {
        case "CURRENT":
            return {...state,
                currentQuestion: payload.currentQuestion,
                question: payload.question,
                selectedOption: payload.selectedOption,
                correctAnswer: payload.correctAnswer,
                score: payload.selectedOption === payload.correctAnswer ?
                    state.score + 10 : state.score,
            }
        case "NEXT_QUESTION":
            return {
                ...state,
                currentQuestion: state.currentQuestion + 1,
                selectedOption: "",
                correctAnswer: "",
                score: state.score,
                question: "",
            };
        default:
            return state;
    }
}

export { currentQuestionReducer };