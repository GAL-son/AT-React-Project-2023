import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { isExpired,} from "react-jwt";

import MovieCard from './MovieCard';
import Button from './Button';

import plusIcon from '../assets/plusIcon.png';
import minusIcon from '../assets/minusIcon.png';
import ascIcon from '../assets/ascIcon.png';
import dscIcon from '../assets/dscIcon.png';

const MovieList = (params) => {
    const movies = params.content;
    const [filter, setFilter] = useState(() => () => {})
    const [sort, setSort] = useState(() => () => {})
    const [reversedSort, setReversedSort] = useState(false)
    const [size, setsize] = useState(1)
    const [loggedIn, setLoggedIn] = useState(!isExpired(localStorage.getItem('token')));

    const [filterKey, setFilterKey] = useState("None")
    const [filterItems, setFilterItems] = useState([])

    useEffect(() => {
        // console.log("START LIST")
        // console.log("PARAMS:", params.sort)
        // console.log("PARAMS:", params.filter)
        // console.log(params.sort === undefined)
        if(params.sort === undefined) {
            console.log("DEFAULT SORT")
            setSort(() => (a,b) => {return 0})
        } else {
            console.log("CUSTOM SORT", params.sort)
            setSort(() => params.sort)
        }
        
        if(params.filter === undefined) {
            console.log("DEFAULT FILTER")
            setFilter(() => ((x) => {return true}));
        } else {
            console.log("CUSTOM FILTER", params.filter)
            setFilter(() => params.filter)
        }
    }, [params])
    const changeSort = (e) => {
        const sortBy = e.target.value;
        // console.info(movies[0])
        switch(sortBy) {
            case "A-Z":
                setSort(() => (a, b) => { 
                    if (a.title < b.title) {
                        return -1;
                    }
                    if ( a.title > b.title){
                        return 1
                    };
                    return 0;
                })
                break;
            case "Year":
                setSort(() => (a,b) => {return b.productionYear - a.productionYear});
                break;
            case "Rate":
                setSort(() => (a,b) => {return b.rate - a.rate});
                break;
            default:
                setSort(() => (a,b) => {return 0});
        }
    }

    const changeFilter = (e) => {
        const filterVal = e.target.value
        console.log(filterKey, filterVal)
        if(filterKey === "None" || filterVal === 'None') {
            setFilter(() => 
                (x) => {return true}
            )
        } else {
            setFilter( () => 
                (x) => {
                    return x[filterKey] == filterVal;
                }
            )
        }        
    }

    const reverseSort = () => {
        setReversedSort(!reversedSort);
    }

    const updateFilterItems = (e) => {
        let filterKey = "";
        const targetKey = e.target.value;        

        switch(targetKey) {
            case "Rate":
                filterKey = 'rate';
                break;
            case "Year":
                filterKey = 'productionYear';
                break;
            case "Genre": 
                filterKey = 'genre';
                break;
            default: 
                filterKey = null
        }
        setFilter(() => (x) => {return true})
        setFilterKey(filterKey)

        // console.log(filterKey)

        if(filterKey == null) {
            setFilterItems([])
            return;
        }

        let newItems = movies.map(x => {
            return x[filterKey]
        }) 

        // console.log(newItems)

        newItems = [...new Set(newItems)]
        // console.log(newItems);
        setFilterItems([...newItems])
    }

    const defaultStyle = {
        width: '10rem'
    }

    return(        
        <div>
            <div className='d-flex flex-row justify-content-around'>
                <div className='mb-2 d-flex flex-row align-items-center'>
                    <span className='ms-2 me-2'>Icon size:</span>
                    <Button className={" btn-outline-secondary btn-sm align-items-center " + ((size == 1) ? "disabled" : "")} title={<img alt={"minusIcon"} src={minusIcon} style={{height:12}} className="img-fluid mb-1"></img>} onClick={() => {setsize((size == 1) ? 1 : size-1)}}></Button>
                    <span className='ms-2 me-2'>{size}</span>
                    <Button className={" btn-outline-secondary btn-sm align-items-center " + ((size == 4) ? "disabled" : "")} title={<img alt={"plusIcon"} src={plusIcon} style={{height:12}} className="img-fluid mb-1"></img>} onClick={() => {setsize((size == 4) ? 4 : size+1)}}></Button>
                </div>
                <div className='mb-2 d-flex flex-row align-items-center'>
                    <span className='ms-2 me-2  text-nowrap'>Sort by:</span>
                    <select class="form-select ms-2 me-2 form-select-sm" style={{width: '100px'}} onChange={e => changeSort(e)}>
                        <option>None</option>
                        <option>A-Z</option>
                        <option>Year</option>
                        <option>Rate</option>
                    </select>
                    <Button className={" btn-outline-secondary btn-sm align-items-center "} 
                    title={<img alt={(reversedSort) ? 'descendingIcon' : 'ascendingImocon'} src={(reversedSort) ? dscIcon : ascIcon} style={{height:12}} className="img-fluid mb-1"/>} onClick={() => {reverseSort()}}></Button>
                </div>
                <div className='mb-2 d-flex flex-row align-items-center'>
                    <span className='ms-2 me-2  text-nowrap'>Filter by:</span>
                    <select class="form-select form-select-sm" style={{width: "100px"}} onChange={e => {updateFilterItems(e)}}>
                        <option>None</option>
                        <option>Rate</option>
                        <option>Year</option>
                        <option>Genre</option>
                    </select>
                    <select class="form-select form-select-sm" style={{width: "200px"}} onChange={e => {changeFilter(e)}}>
                        <option>None</option>
                        {
                            filterItems.map(fbb =>
                                <option key={fbb} value={fbb}>{fbb}</option>
                              )
                        }                        
                    </select>
                </div>
                {(loggedIn) && 
                <div className='mb-2 d-flex flex-row align-items-center'>
                <Link to="/add"><Button className="btn-sm btn-outline-secondary" title={<div><span>ADD MOVIE </span></div>}/></Link>
            </div>}
            </div>
                {(movies.filter(filter).length == 0) ? <h2 style={{margin: '50px', fontWeight: 'bold'}}>NO MOVIES FOUND</h2> : 
                    <div className="d-flex flex-row flex-wrap justify-content-center" >
                        {(reversedSort ? movies.sort(sort).reverse() : movies.sort(sort)).filter(filter).map((movie) => <MovieCard key={movie.id} style={defaultStyle} size={size-1} year={movie.productionYear} cover={movie.image} genre={movie.genre} rate={movie.rate} title={movie.title} description={movie.content} id={movie.id} />)}
                    </div>
                }
        </div>
    )
}

export default MovieList;