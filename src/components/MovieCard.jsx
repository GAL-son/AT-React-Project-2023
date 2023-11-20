import { Link } from "react-router-dom/cjs/react-router-dom";
import noCover from "../assets/movieNoCover.png"

const MovieCard = (params) => {

    const styles = {
        width: '10rem', // maybe delete
        height: '15rem',
    }

    const getCover = () => {
        return (params.cover === undefined) ? noCover : params.cover;
    }

    const getTitle = () => {
        return (params.title === undefined) ? "No title" : params.title;
    }

    const getDescription = () => {
        return (params.description === undefined) ? "" : params.description; // Shorten description
    }

    return (
        //<Link to={""}>
            <div className="card text-bg-dark rounded-lg" style={styles}>
                <img src={getCover()} className="card-img"></img>
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                    <div>
                        <h4>{getTitle()}</h4>
                        <p>{getDescription()}</p>
                        
                    </div>  

                </div>
            </div>
        //</Link>
    )
}

export default MovieCard;