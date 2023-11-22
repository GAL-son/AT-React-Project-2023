import { Link } from "react-router-dom"

import ProfilePicture from "./ProfilePicture"

const ProfileLink = (params) => {
    return(
        <Link to={params.profileLink}>
            <div className="m-1 d-flex flex-column justify-content-center align-items-center">
                <ProfilePicture style={{height: '4rem', width: '4rem'}}/>
                <span>{params.username}</span>
            </div>
        </Link>
    )
}

export default ProfileLink