import axios from "axios";

const fetchQuestionsByCategory = async(
    categoryNumber:number,
    difficulty,
    navigate,
    questionsDispatch
) => {
    try {
        const { data } = await axios.get(
            `https://opentdb.com/api.php?amount=10&category=${categoryNumber}&difficulty=${difficulty}&type=boolean`
        );
        console.log(data.results)
        navigate("/rules");
        questionsDispatch({
            type: "ADD_QUESTIONS",
            payload: data.results,
        });

    } catch (error) {
        console.log(error);
    }
}

export { fetchQuestionsByCategory };