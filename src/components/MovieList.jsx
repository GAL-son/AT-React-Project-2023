import MovieCard from './MovieCard';

const MovieList = (params) => {
    const movies = params.content

    const getParamSearch = () => {
        if(params.search == undefined) {
            return (x) => {return true};
        } else {
            return params.search;
        }
    }

    const getList = () => {
        if(movies.length == 0) {
            return(<h3>NO MOVIES</h3>)
        } else {
            return(
                <div className="d-flex flex-row flex-wrap justify-content-center" >
                    {movies.filter(getParamSearch()).map((movie) => <MovieCard style={defaultStyle} size={params.size} cover={movie.image} title={movie.title} description={movie.content} id={movie.id} />)}
                </div>
            )
        }
    } 

    const defaultStyle = {
        width: '10rem'
    }

    return(        
        <div>
            <div>
                List controls
            </div>
                {getList()}
            <div>
                pagination here
            </div>
        </div>
    )
}

export default MovieList;