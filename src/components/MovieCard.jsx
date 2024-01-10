import { useState } from "react";
import { Link } from "react-router-dom"

import noCover from "../assets/movieNoCover.png"
import '../css/movieCard.css'

const sizes = [
    {
        width: '7rem',
        height: '10rem',
        textMain: '0.9rem',
        textSub: '0.6rem'
    },
    {
        width: '9rem',
        textMain: '1.2rem',
        textSub: '0.8rem'
    },
    {
        width: '11rem',
        textMain: '1.4rem',
        textSub: '1rem'
    },
    {
        width: '13rem',
        textMain: '1.6rem',
        textSub: '1rem'
    },
]


const MovieCard = (params) => {
    const linkOveride = params.link;

    const getLink = () => {
        if(linkOveride !== undefined) {
            return {
                pathname: "/"+linkOveride
            }
        } else {
            return {
                pathname: `/details/${encodeURIComponent(getId())}`,
            }
        }
    }

    const [size, setSize] = useState(params.size | 0);

    const getCover = () => {
        return (params.cover == undefined || params.cover === null) ? noCover : params.cover;
    }

    const getId = () => {
        return (params.id === undefined) ? "" : params.id;
    }

    const getTitle = () => {
        return (params.title === undefined || params.title == "") ? "No title" : params.title;
    }

    const getDescription = () => {
        let dsc = params.description;
        if (dsc === undefined || dsc == "") 
        return "";

        let words = dsc.split(' ');
        dsc = ""

        while(dsc.length < 40) {
            dsc += words[0] + " ";
            if(dsc.length >= params.description.length) return dsc;
            words = words.slice(1)
        }

        return dsc + '...'; // Shorten description
    }

    const getSize = (prop) => {
        return sizes[size];
    }

    return (
        <Link to={getLink()}
        onClick={() => {console.info(getId())}}>
            <div className="card text-bg-dark rounded-lg m-2 border-0" style={{width: getSize().width, height: (getSize().width * 1.3)}}>
                <img src={getCover()} onError={({currentTarget}) => {currentTarget.onError = null; currentTarget.src=noCover}} className="card-img" style={{objectFit: "cover", width: '100%', height: getSize().width * 1.3}}></img>
                <div className="card-img-overlay d-flex flex-column justify-content-end gradient-bg">
                        <h4 style={{fontSize: getSize().textMain, margin:0, marginBottom:2, borderBlockEnd: "1px white"}}>{getTitle()}</h4>
                        <p style={{fontSize: getSize().textSub, margin:-5,}}>{getDescription()}</p>                        
                </div>
            </div>
        </Link>
    )
}

export default MovieCard;