import '../css/general.css'

import noCover from "../assets/movieNoCover.png"
import { useEffect } from 'react'

const MovieCover = (params) =>
{
    useEffect(() => {console.log("CARD RERENDER")}, [])

    const getCover = () => {
        return (params.cover === undefined) ? noCover : params.cover;
    }

    return (
        <div key={params.cover} className="card border-0 ms-0 me-3  rounded-medium" style={params.style}>
            <img onError={({currentTarget}) => {
                currentTarget.onError = null;
                currentTarget.src = noCover;
                }}src={getCover()} style={{...params.style, objectFit: "cover"}} className="card-img  rounded-medium"></img>
        </div>
    )
}

export default MovieCover;