import axios from "axios";
import { QuizActionType } from "../types";

const fetchQuestionsByCategory = async(
    categoryNumber:number,
    difficulty:string,
    navigate:any,
    questionsDispatch:React.Dispatch<QuizActionType>
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