import { useState } from "react";
import { Link } from "react-router-dom"

import noCover from "../assets/movieNoCover.png"
import '../css/movieCard.css'

const sizes = [
    {
        width: '7rem',
        textMain: '1rem',
        textSub: '0.6rem'
    },
    {
        width: '9rem',
        textMain: '1.4rem',
        textSub: '0.8rem'
    },
    {
        width: '11rem',
        textMain: '1.6rem',
        textSub: '1rem'
    },
    {
        width: '13rem',
        textMain: '2rem',
        textSub: '1rem'
    },
]


const MovieCard = (params) => {

    const [size, setSize] = useState(params.size | 0);

    const getCover = () => {
        return (params.cover === undefined) ? noCover : params.cover;
    }

    const getTitle = () => {
        return (params.title === undefined) ? "No title" : params.title;
    }

    const getDescription = () => {
        return (params.description === undefined) ? "" : params.description; // Shorten description
    }

    const getSize = (prop) => {
        return sizes[size];
    }

    return (
        <Link to="/details" relative="/">
            <div className="card text-bg-dark rounded-lg m-2 border-0" style={{width: getSize().width}}>
                <img src={getCover()} className="card-img"></img>
                <div className="card-img-overlay d-flex flex-column justify-content-end gradient-bg">
                    <div className="">
                        <h4 style={{fontSize: getSize().textMain}}>{getTitle()}</h4>
                        <p style={{fontSize: getSize().textSub}}>{getDescription()}</p>                        
                    </div>  

                </div>
            </div>
        </Link>
    )
}

export default MovieCard;