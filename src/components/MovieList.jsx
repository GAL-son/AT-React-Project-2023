import MovieCard from './MovieCard';

const MovieList = (params) => {
    const moviesTest = [
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
    ];

    return(
        <div className="d-flex flex-row flex-wrap justify-content-center">
            {moviesTest.map((movie) => <MovieCard title={movie.title} description={movie.desc}/>)}
        </div>
    )
}

export default MovieList;