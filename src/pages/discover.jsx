import { useState, useEffect } from 'react';

import { getMovies } from "../api";

import ActivityList from "../components/ActivityList";
import MovieListPreview from "../components/MovieListPreview";


const Discover = () => {

    const [newMovies, setNewMovies] = useState([])
    const [popularMovies, setPopulatMovies] = useState([])

    const newMoviesLink = () => {
        const url = new URL("https://localhost:3000/movies/")
        url.searchParams.append("sort", "year")

        return url.href //.replace("https://localhost:3000/", "")
    } 

    useEffect(() => {
        try {
            getMovies()
                .then(movies => {                    
                    // console.info(movies)
                    // console.info([...movies].sort((a, b) => {return 0.5 - Math.random()}))
                    setPopulatMovies([...movies].sort((a, b) => 0.5 - Math.random()));
                    setNewMovies([...movies].sort((a,b) => {
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
                    <div><MovieListPreview limit="6" content={newMovies} seeMore={"movies"} search={"?sort=productionYear"} size="2"/></div>
                </div>
                <div  className="">
                    <h3>Random movies</h3>
                    <div><MovieListPreview content={popularMovies} limit="6" size="2"/></div>
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