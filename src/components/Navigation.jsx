import { Link, useNavigate } from "react-router-dom";

import searchIcon from "../assets/searchIcon.png"

import '../css/general.css'

import Button from "./Button";
import ProfileBubble from "./ProfileBubble";
import { useState } from "react";

const Navigation = () => {
    const navigate = useNavigate();
    const [searchState, setSearchState] = useState("")

    const handleSearch = () => {        
        // console.log(searchState)
        const searchLink = searchState.replace(' ', '+')
        navigate("/movies/"+searchLink);
    }

    return(
        <nav className="navbar navbar-expand-lg bg-color-primary rounded-pill p-1 m-3" >
            <div className="container-fluid flex-row justify-content-between">
                <Link to='/' relative="/" className="navbar-brand" href>Movio</Link>
                <form onSubmit={handleSearch} className="d-flex w-50" role="search">
                    <input className="form-control me-1 rounded-pill" value = {searchState} name="search" type="search" placeholder="Search movies..." aria-label="Search" onChange={e => {setSearchState(e.target.value)}}/>
                    <Button className="btn btn-outline-secondary" type="submit" onClick={handleSearch} title={<img src={searchIcon} className="img-fluid mb-1"></img>}/>
                </form>
                <Link to='profile' relative="/"><Button className="btn" aria-expanded="false" title={<ProfileBubble />}/></Link>
            </div>

            
        </nav>
    )
}

export default Navigation;