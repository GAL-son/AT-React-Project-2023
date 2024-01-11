import { useState, useEffect } from 'react';

import { getMovies } from "../api";

import ActivityList from "../components/ActivityList";
import MovieListPreview from "../components/MovieListPreview";



const fakeActivity = [
    {
        userName: "Galson",
        activ: "Is planing to watch",
        title: "Transformers 2: Revenge of the Fallen",
        date: "21-11-2023"
    },
    {
        userName: "Galson",
        activ: "Watched",
        title: "Avengers: Endgame",
        date: "02-11-2023"
    }
]

const Discover = () => {

    const [newMovies, setNewMovies] = useState([])
    const [popularMovies, setPopulatMovies] = useState([])

    useEffect(() => {
        try {
            getMovies()
                .then(movies => {
                    setPopulatMovies(movies.sort((a, b) => 0.5 - Math.random()));
                    setNewMovies(movies.sort((a,b) => {
                        return b.productionYear - a.productionYear;
                    }));
                  
                });
        } catch {
            setNewMovies([])
            setPopulatMovies([])
        }
    }, [])

    return(
        <div className="container-fluid m-2">
            <h1>Discover</h1>
            <div className="container-fluid d-flex flex-column">
                <div className="w-100">
                    <h3>New movies</h3>
                    <div><MovieListPreview limit="7" content={newMovies} seeMore="movies"/></div>
                </div>
                <div  className="">
                    <h3>Random movies</h3>
                    <div><MovieListPreview content={popularMovies} seeMore={"movies"} limit="7"/></div>
                </div>
            </div>
            {// API FEATURE NOT IMPLEMENTED
            /* <div className="container-fluid mt-4">
                <h3>Friends Activity</h3>
                <ActivityList activities={fakeActivity}/>
            </div> */}
        </div>
    )
}
export default Discover;