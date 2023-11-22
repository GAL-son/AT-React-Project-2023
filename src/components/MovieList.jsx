import MovieCard from './MovieCard';

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

const MovieList = (params) => {
    const defaultStyle = {
        width: '10rem'
    }

    return(        
        <div>
            <div>
                List controls
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center" >
                {moviesTest.map((movie) => <MovieCard style={defaultStyle} title={movie.title} description={movie.desc} />)}
            </div>
            <div>
                pagination here
            </div>
        </div>
    )
}

export default MovieList;