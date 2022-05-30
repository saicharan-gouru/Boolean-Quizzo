import "./Homepage.css";
import {Link} from "react-router-dom";
import {useDocumentTitle} from "../../customhooks";


function Homepage(){
    useDocumentTitle("Boolean Quizzo | Home")
    return(
        <div className="main-container">
            <div>
                <h1 className="hero-heading">Welcome to Boolean Quizoo, Are you ready?</h1>
                <p className="hero-desc">This is the app which containes various quizes which you can explore and play. You just need to know boolean values (True/false). As name itself depicts ,all the questions are of type boolean. </p>
                <Link to="/categories"><button className="button primary-green">Play now</button></Link>
            </div>
            <img className="hero-img" src="/assets/images/hero-img.svg" alt="hero-img" />
        </div>
    );
}

export {Homepage};