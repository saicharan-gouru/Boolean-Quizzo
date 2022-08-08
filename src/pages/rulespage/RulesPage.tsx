import "./RulesPage.css";
import "../../data/rules"
import { rules } from "../../data/rules";
import {Link} from "react-router-dom";
import {useDocumentTitle} from "../../customhooks";
import React from 'react'

function RulesPage(){
    useDocumentTitle("Rules");
    return(
        <div className="rules-container">
            <div className="rules">
                <h1>Rules</h1>
                <ul>
                    {rules.map(item => <li className="rule">{item.title}</li>)}
                </ul>
                <Link to="/play"><button className="button primary-green">Play</button></Link>
            </div>
            <img src="/assets/images/rules-image.svg" alt="rules" className="rules-img" />
        </div>
    );
}

export {RulesPage};