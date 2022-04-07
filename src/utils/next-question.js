function fetchNextQuestion({ currentQuestion, currentQuestionDispatch, selectedOption, navigate }) {
    if (currentQuestion === 9) {
        navigate("/result");
    } else if (selectedOption) {
        currentQuestionDispatch({ type: "NEXT_QUESTION" })
    } else {
        console.log("Selecte a option");
    }
}

export { fetchNextQuestion };