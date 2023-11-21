import MovieCard from "./MovieCard";

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

const MovieListPreview = () => {

    const limit = 6;
    const size = 2;

    const getArraySliced = () => {
        return testPreviewMovies.slice(0,limit);
    }

    return (
        <div className="container-fluid overlay-gradient">
            <p>MovieListPreviw</p>
            <div className="d-flex ">
                {getArraySliced().map(x => 
                    <MovieCard size={size} title={x.title} description={x.desc}/>    
                )}
                <MovieCard title="See More"/>
            </div>
            <div className="overlay-content">
                SEE MORE HERE
            </div>
            
        </div>
    )
}

export default MovieListPreview;