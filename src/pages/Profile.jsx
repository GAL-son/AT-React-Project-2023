import Button from "../components/Button"
import MovieListPreview from "../components/MovieListPreview";
import ProfileList from "../components/ProfileList";
import ProfilePicture from "../components/ProfilePicture";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isExpired, decodeToken  } from "react-jwt";

import { logoutUser } from "../api";

const testFriends = ['Antony',"Anna123","TestNull","Robert"]

const Profile = (params) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(decodeToken(localStorage.getItem('token')));

    const handleLogout = () => {
        console.log(user)
        logoutUser(user.userId)
        .then((res) => {
            console.log(res)
            localStorage.removeItem('token');
            navigate("/")
                window.location.reload();
        }).catch((err) => {
            console.error(err)
        })
    }

    return(
        <div className="container-fluid">
            <div className="d-flex flex-row bg mb-2">                
            <div className="flex-grow-1">
                    <h1>Name: {user.name}</h1>
                    <div className="d-flex flex-row justify-content-around mt-5">
                        <Link to="/signin"><button className={"btn btn-success rounded-pill "}>Change account</button></Link>
                        <Button title="Logout" className="btn-danger" onClick={handleLogout}/>
                    </div>
                    {/* <p>{testParams.desc}</p>
                    <div>
                    <h3>Friends</h3>
                        <ProfileList profiles={testFriends}/>
                    </div> */}
                </div>
               
                <div className='m-4 w-25'><ProfilePicture style={{height: '10rem'}}/></div>
           </div>
           {/* <div>
            <h3>Watched movies</h3>
            <MovieListPreview/>
            <h3>Favourite Movies</h3>
            <MovieListPreview/>
            <h3>Planed to watch</h3>
            <MovieListPreview/>
           </div> */}
           
        </div>
    )
}

export default Profile;