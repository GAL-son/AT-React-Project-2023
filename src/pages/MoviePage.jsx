import { useState, useEffect } from "react";

import MovieCover from "../components/MovieCover";
import MovieListPreview from "../components/MovieListPreview";
import ProfileList from "../components/ProfileList";

import '../css/moviePage.css'
import { getMovieDetails } from "../api";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import { isExpired, decodeToken  } from "react-jwt";

import { deleteMovie } from "../api";



const MoviePage = (params) => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [movieData, setMovieData] = useState({})
    const [pageLoaded, setLoaded] = useState(false)
    const [loadedText, setLoadedText] = useState("Loading...") 
    const [loggedIn, setLoggedIn] = useState(!isExpired(localStorage.getItem('token')));
    const [user, setUser] = useState(decodeToken(localStorage.getItem('token')));
    const [errors, setErrors] = useState("")

    const getData = (data, def) => {
        if(data == '' || data == undefined) {
            return def;
        } else {
            return data;
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

    const handleDelete = () => {
        deleteMovie(id)
        .then(() => {
            navigate("/movies");
        })
        .catch((err) => {
            const errorMessages = err.response.data;
            setErrors(errorMessages);
        })
    }

    const getLoadedPage = () => {
        return (
            <>
             {(errors != "") && 
            <div className='mb-3 alert alert-danger'>
                Error occurred! - {errors}
            </div>}
            <div className="container-fluid d-flex flex-row mb-3">
                <div className="">
                    <MovieCover cover={getData(movieData.image, undefined)} style={{width: '15rem'}}/>
                </div>
                <div className="flex-grow-1">
                    <h1 className="mb-4">{getData(movieData.title, "No title")}</h1>
                    {/* // API FEATURE NOT IMPLEMENTED */}
                    <div className="d-flex flex-row justify-content-around" id="aditional-info">
                        <span>Year: {getData(movieData.productionYear, "No data")}</span><span>Genre: {getData(movieData.genre, "No data")}</span><span>Score: {getData(movieData.rate, "Not rated")}</span>
                    </div>
                    <p className="text-wrap" style={{fontSize:'1.3rem'}}>{getData(movieData.content, "No description")}</p>
                </div>
            </div>
            {(loggedIn) && (user.role == "admin") && 
            <div>
                <Button onClick={handleDelete} className=" btn btn-danger" title="DELETE MOVIE"></Button>
            </div>}
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