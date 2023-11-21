import searchIcon from "../assets/searchIcon.png"

import '../css/general.css'

import Button from "./Button";
import ProfileBubble from "./ProfileBubble";

const Navigation = () => {

    return(
        <nav className="navbar navbar-expand-lg bg-color-primary rounded-pill p-1 m-3" >
            <div className="container-fluid flex-row justify-content-between">
                <a className="navbar-brand" href="#">Movio</a>
                <form className="d-flex w-50" role="search">
                    <input className="form-control me-1 rounded-pill" type="search" placeholder="Search movies..." aria-label="Search"/>
                    <Button className="btn btn-outline-secondary" type="submit" title={<img src={searchIcon} className="img-fluid mb-1"></img>}/>
                </form>
                <Button className="btn" data-bs-toggle="dropdown" aria-expanded="false" title={<ProfileBubble />}/>

            </div>

            
        </nav>
    )
}

export default Navigation;