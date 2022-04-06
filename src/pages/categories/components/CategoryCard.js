import "./CategoryCard.css";
import {Link} from "react-router-dom";

function CategoryCard({item}){

    const {title,difficulty} = item;
    return(
        <div className="category-card">
            <h1>{title}</h1>
            <p>Difficulty : {difficulty}</p>
            <Link to="/rules"><button className="button primary-blue">Play now</button></Link>
        </div>
    );
}

export {CategoryCard};