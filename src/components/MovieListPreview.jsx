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

    const {content} = params;

    const [limit, setLimit] = useState((params.limit === undefined) ? 7 : params.limit);
    const size = 0;

    const getArraySliced = () => {
        if(content === undefined) return []
        return content.slice(0,limit);
    }

    return (
        <div className="container-fluid overlay-gradient">
            <div className="d-flex ">
                {getArraySliced().map((movie) => <MovieCard size={size} id={movie.id} cover={movie.image} title={movie.title} description={movie.content} />)}
                {(testPreviewMovies.length > limit) ? <MovieCard link={params.seeMore} size={size} title="See More"/> : <></>}
            </div>
            
        </div>
    )
}

export default MovieListPreview;