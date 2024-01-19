import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from '../api';


import MovieList from '../components/MovieList'

const AllMoviesList = () => {
    
    const [URLParams, setURLParams] = useSearchParams();
    const [pageChange, setPageChange] = useState(false)
    const [movies, setMovies] = useState([])

    useEffect(() => {setPageChange(!pageChange)}, [URLParams])

    const getSearchFunction = () => {
        let search = URLParams.get("search")
        console.log(URLParams)
        console.log(search)

        if(search === undefined || search ==='' || search == null) {
            console.log("EMPTY SEARCH")
            return ((x) => {return true});
        } else {
            console.log("SEARCH BY -", search)
            return ((x) => {
                const words = search.toLowerCase().split(' ');
                const movieWords = x.title.toLowerCase().replace(/[^0-9a-z ]/gi, '').split(' ').concat(x.content.toLowerCase().replace(/[^0-9a-z ]/gi, '').split(" "))



                return movieWords.some(item => words.includes(item)) || (x.title).toLocaleLowerCase().search(search.toLowerCase()) !== -1;
            })
        }        
    }

    const getSort = () => {
        const sortParam = URLParams.get("sort")
        if(sortParam === undefined) {
            return (a,b) => {return 0};
        }

        const newFn = (a,b) => {
            // console.log(sortParam)
            return b[sortParam] - a[sortParam];
        }
        // console.log("NEWFN - ",newFn)
        return newFn;
    }

    useEffect(() => {
        try {
            getMovies().then(movies => {setMovies(movies)})
        } catch {
            setMovies([])
        }
    }, [])

    return(
        <MovieList filter={getSearchFunction()} sort={getSort()} content={movies}/>
    )
}

export default AllMoviesList;