import '../css/general.css'

import noCover from "../assets/movieNoCover.png"

const MovieCover = (params) =>
{
    const getCover = () => {
        return (params.cover === undefined) ? noCover : params.cover;
    }

    return (
        <div className="card border-0 ms-0 me-3  rounded-medium">
            <img src={getCover()} className="card-img  rounded-medium"></img>
        </div>
    )
}

export default MovieCover;