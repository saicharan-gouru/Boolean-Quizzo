export function questionsReducer(state, { type, payload }) {
    switch (type) {
        case "ADD_QUESTIONS":
            return {...state, questions: [...payload] }
        default:
            return state;
    }
}