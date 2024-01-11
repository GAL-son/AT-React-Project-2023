import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovies } from '../api';


import MovieList from '../components/MovieList'

const AllMoviesList = () => {

    const {search} = useParams()
    const {sort} = useParams()
    const [movies, setMovies] = useState([])

    const getSearchFunction = () => {
        if(search === undefined || search =='') {
            return  (x) => {return true};
        } else {
            return ((x) => {
                const words = search.toLowerCase().split('+');
                // const titleWords = 
                // const descWords = 

                const movieWords = x.title.toLowerCase().split(' ').concat(x.content.toLowerCase().split(" "))
                console.log(movieWords)
                return movieWords.some(item => words.includes(item))
            })
        }
    }

    const getSortFunction = () => {
        if(sort === undefined || sort == "") {
            return (a,b) => {return 0}
        } else {
            return ((a,b) => {
                return b[sort] - a[sort]
            })
        }
    }

    useEffect(() => {
        try {
            getMovies().then(movies => {setMovies(movies)})
        } catch {
            setMovies([])
        }
    }, [])

    return(
        <MovieList content={movies.filter(getSearchFunction()).sort(getSortFunction())}/>
    )
}

export default AllMoviesList;