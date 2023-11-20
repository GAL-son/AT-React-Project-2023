import noProfileIcon from "../assets/profileNoPicture.png"

import {useState} from 'react'

const ProfileBubble = (params) => {
    const [logedIn, setLogedIn] = useState(params.logedIn);

    return(
        <div style={{height: "2rem"}} className="m-0 p-0 d-flex flex-row align-items-center">
            <span className="me-2">UserName</span>
            <img className="rounded-circle m-0" style={{height:"1.5rem"}} src={noProfileIcon}></img>
        </div>
    )
}

export default ProfileBubble;