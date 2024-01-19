import MovieCard from "./MovieCard";

import { useEffect, useState } from "react";

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

    const {content, size} = params;

    const [limit, setLimit] = useState((params.limit === undefined) ? 7 : ((params.search === undefined) ? parseInt(params.limit)+1: params.limit));

    const getArraySliced = () => {
        if(content === undefined) return []
        return content.slice(0,limit);
    }

    return (
        <div className="container-fluid overlay-gradient">
            <div className="d-flex flex-wrap">
                {getArraySliced().map((movie) => <MovieCard size={size} id={movie.id} cover={movie.image} title={movie.title} description={movie.content} />)}
                {(params.search !== undefined && testPreviewMovies.length > limit) ? <MovieCard link={params.seeMore} search={params.search} size={size} title="See More"/> : <></>}
            </div>
            
        </div>
    )
}

export default MovieListPreview;