import { useEffect, useState } from 'react';

import { postMovie } from '../api';

import MovieCover from '../components/MovieCover';
import '../css/login.css'

const AddMovie = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [cover, setCover] = useState("");
    const [genre, setGenre] = useState("");
    const [rate, setRate] = useState(1);
    const [prodYear, setProdYear] = useState(new Date().getFullYear())

    const [errors, setErrors] = useState("")
    const [success, setSuccess] = useState(false)

    // useEffect(() => {console.log(cover)}, [cover])

    const updateScore = (e) => {
        const newVal = e.target.value;

        if(newVal > 0 && newVal < 11) {
            setRate(newVal)
        }
    }

    const updateYear = (e) => {
        const newVal = e.target.value;

        if(newVal >= 1888 && newVal <= getCurrYear() + 5) {
            setProdYear(newVal)
        }
    }

    const getCurrYear = () => {
        return new Date().getFullYear()
    }

    const clearForm = () => {
        setTitle("")
        setDescription("")
        setCover("")
        setRate(1)
        setGenre("")
        setProdYear(getCurrYear())
    }

    const submitForm = (e) => {
        e.preventDefault()
        // setErrors("TEST ERROR")

        postMovie(title, cover, description, genre, rate.toString(), prodYear.toString())
        .then(res => {
            console.log(res)
            setSuccess(true)
        }).catch(err => {
            const errorMessages = {};
            errorMessages.auth = err.response.data;
            setErrors(errorMessages.auth || {});
        })


    }



    return (
        <form onReset={clearForm} onSubmit={submitForm}>
            <h1>Add Movie</h1>
            {(errors != "") && 
            <div className='m-4 alert alert-danger'>
                Error occurred! - {errors}
            </div>}
            {(success != "") && 
            <div className='m-4 alert alert-success'>
                Movie Added
            </div>}
        <div id='content' className='container-fluid d-flex flex-row justify-content-start'>        
            <div style={{width: '40%'}} className='container-fluid d-flex flex-column align-items-left'>   
                
                <div className="mb-3 mt-2">
                    <label for="exampleInputEmail1" className="form-label">Movie Title</label>
                    <input value={title} onChange={(e) => {setTitle(e.target.value)}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Description</label>
                    <textarea value={description} onChange={(e) => {setDescription(e.target.value)}} className='form-control' rows={6}></textarea>
                </div>                
            </div>
            <div style={{width: '40%'}} className='container-fluid d-flex flex-column align-items-left'>
                <h1></h1>
                <div className='mb-3'>
                    <label for="MovieCoverField" className="form-label">Movie Cover (link)</label>
                    <input value={cover} onChange={(e) => {setCover(e.target.value)}} className='form-control' type="text" name="" id="MovieCoverField" />
                </div>    
                <div className='mb-3'>
                    <label for="" className="form-label">Genre</label>
                    <input  value={genre} onChange={(e) => {setGenre(e.target.value)}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>                 
                <div className='d-flex flex-row'>
                    <div className='mb-3'>
                        <label for="" className="form-label">Release year</label>
                        <input value={prodYear} onChange={updateYear} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div> 
                    <div className='mb-3 ms-2'>
                        <label for="" className="form-label">Raring</label>
                        <input value={rate} onChange={updateScore} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>  
                </div>              
            </div>         
            <div className='ml-5'>
                <MovieCover style={{width: '12rem', height: '19rem'}}  cover={cover}></MovieCover>
            </div>
        </div>
        <div className='d-flex justify-content-center'>
            <button type="reset" className="btn btn-danger rounded-pill me-5">Clear all</button>
            <button type="submit" className="btn btn-success rounded-pill">Add movie</button>
        </div>
        </form>
    )
}

export default AddMovie;