import noProfileIcon from "../assets/profileNoPicture.png"

import {useState} from 'react'
import ProfilePicture from "./ProfilePicture";

const ProfileBubble = (params) => {
    const [logedIn, setLogedIn] = useState(params.logedIn);

    return(
        <div style={{height: "2rem"}} className="m-0 p-0 d-flex flex-row align-items-center">
            <span className="me-2">UserName</span>
            <ProfilePicture style={{height: '1.7rem'}}/>
        </div>
    )
}

export default ProfileBubble;