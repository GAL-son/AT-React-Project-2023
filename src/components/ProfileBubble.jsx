import noProfileIcon from "../assets/profileNoPicture.png"

import {useState} from 'react'
import ProfilePicture from "./ProfilePicture";

const ProfileBubble = (params) => {
    
    const renderInside = () => {
        if (params.loggedIn) {
            return(
                <>
                    <span className="me-2">{params.name}</span>
                    <ProfilePicture style={{height: '1.7rem'}}/>    
                </>
            )
        } else {
            return (
                <span className="">Login</span>
            )
        }
    }

    return(
        <div style={{height: "2rem"}} className="m-0 p-0 d-flex flex-row align-items-center justify-content-center">
            {renderInside()}
        </div>
    )
}

export default ProfileBubble;