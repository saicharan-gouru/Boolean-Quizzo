import "./RulesPage.css";
import "../../data/rules"
import { rules } from "../../data/rules";

function RulesPage(){

    return(
        <div className="rules-container">
            <div className="rules">
                <h1>Rules</h1>
                <ul>
                    {rules.map(item => <li className="rule">{item.title}</li>)}
                </ul>
            </div>
            <img src="/assets/images/rules-image.svg" alt="rules" />
        </div>
    );
}

export {RulesPage};