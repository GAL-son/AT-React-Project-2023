

const MoviePage = (params) => {
    const checkMovie = () => {
        return params.movie !== undefined;
    }

    return(
        <div className="container-fluid">

            <h1>{checkMovie() ? params.movie.title : "NO TITLE"}</h1>
            <p>{checkMovie() ? params.title.description : "NO DESCRIPTION"}</p>

        </div>
    )
}

export default MoviePage;