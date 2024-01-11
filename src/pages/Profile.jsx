import { Button } from "../components/Button"
import MovieListPreview from "../components/MovieListPreview";
import ProfileList from "../components/ProfileList";
import ProfilePicture from "../components/ProfilePicture";

import { useState } from "react";
import { Link } from "react-router-dom";
import { isExpired, decodeToken  } from "react-jwt";

const testFriends = ['Antony',"Anna123","TestNull","Robert"]

const Profile = (params) => {

    const [user, setUser] = useState(decodeToken(localStorage.getItem('token')));


    return(
        <div className="container-fluid">
            <div className="d-flex flex-row bg mb-2">                
            <div className="flex-grow-1">
                    <h1>Name: {user.name}</h1>
                    <div className="d-flex flex-row justify-content-around">
                        <Link to="/signin"><button className={"btn btn-success rounded-pill "}>Change account</button></Link>
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