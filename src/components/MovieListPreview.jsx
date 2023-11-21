import MovieCard from "./MovieCard";

import { useState } from "react";

const testPreviewMovies = [
    {
        title: "LMAO",
        desc: "LMAO2"
    },
    {
        title: "XDDDDD",
        desc: "NAJLEPSZY"
    },
    {
        title: "LMAO",
        desc: "LMAO2"
    },
    {
        title: "XDDDDD",
        desc: "NAJLEPSZY"
    },
    {
        title: "LMAO",
        desc: "LMAO2"
    },
    {
        title: "XDDDDD",
        desc: "NAJLEPSZY"
    },
    {
        title: "LMAO",
        desc: "LMAO2"
    },
    {
        title: "XDDDDD",
        desc: "NAJLEPSZY"
    },
    {
        title: "LMAO",
        desc: "LMAO2"
    },
    {
        title: "XDDDDD",
        desc: "NAJLEPSZY"
    }
]

const MovieListPreview = (params) => {

    const [limit, setLimit] = useState((params.limit === undefined) ? 7 : params.limit);
    const size = 0;

    const getArraySliced = () => {
        return testPreviewMovies.slice(0,limit);
    }

    return (
        <div className="container-fluid overlay-gradient">
            <div className="d-flex ">
                {getArraySliced().map(x => 
                    <MovieCard size={size} title={x.title} description={x.desc}/>    
                )}
                {(testPreviewMovies.length > limit) ? <MovieCard size={size} title="See More"/> : <></>}
            </div>
            
        </div>
    )
}

export default MovieListPreview;