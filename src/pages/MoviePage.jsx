import { useState, useEffect } from "react";

import MovieCover from "../components/MovieCover";
import MovieListPreview from "../components/MovieListPreview";
import ProfileList from "../components/ProfileList";

import '../css/moviePage.css'
import { getMovieDetails } from "../api";
import { useParams } from "react-router-dom";

const testUsers = ["Galson", "Anna", "Persiciara", "Sol"]



const MoviePage = (params) => {

    const { id } = useParams();
    const [movieData, setMovieData] = useState({})
    const [pageLoaded, setLoaded] = useState(false)
    const [loadedText, setLoadedText] = useState("Loading...") 
    // const []
    
    const getMovieCover = () => {
        if(movieData.image == '') {
            return undefined
        } else {
            return movieData.image;
        }
    }

    const getMovieTitle = () => {
        if(movieData.title == '' || movieData.title === undefined) {
            return "NO TITLE"
        } else {
            return movieData.title;
        }
        
    }

    const getMovieDesc = () => {
        if(movieData.conntent == '') {
            return "NO DESCRIPTION"
        } else {
            return movieData.content;
        }
        
    }

    useEffect(()=>{
        console.log(id)
        getMovieDetails(id)
            .then(data => setMovieData(data))
            .then(() => setLoaded(true))
            .catch((err) => {
                setLoaded(false);
                setLoadedText(err.message)
                console.error(err)});
    },[])

    const getLoadedPage = () => {
        return (
            <>
            <div className="container-fluid d-flex flex-row mb-3">
                <div className="">
                    <MovieCover cover={getMovieCover()} style={{width: '15rem'}}/>
                </div>
                <div className="flex-grow">
                    <h1 className="mb-4">{getMovieTitle()}</h1>
                    {// API FEATURE NOT IMPLEMENTED
                    /* <div className="d-flex flex-row justify-content-between" id="aditional-info">
                        <span>Year: 1999</span><span>Lenght: 2h 69m</span><span>Country: Denmark</span>
                    </div> */}
                    <p className="text-wrap" style={{fontSize:'1.3rem'}}>{getMovieDesc()}</p>
                </div>
            </div>
            {// API FEATURE NOT IMPLEMENTED
            /* <div className="mb-2">
                <h4>Watcheed by:</h4>
                <ProfileList profiles={testUsers}/>
            </div>
            <div className="mb-2">
                <h4>Similar Movies</h4>
                <MovieListPreview/>
            </div> */}
            </>
        )
    }

    return(
        <div className="container-fluid p-2">
            {(pageLoaded) ? getLoadedPage() : <h2>{loadedText}</h2>}
        </div>
    )
}

export default MoviePage;