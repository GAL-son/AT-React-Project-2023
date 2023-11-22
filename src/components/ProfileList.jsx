import ProfileLink from "./ProfileLink"

const ProfileList = (params) => {
    return(
        <div className="container-fluid d-flex flex-row">
            {params.profiles.map((x) => 
                <ProfileLink username={x} profileLink="/profile"/>
            )}
        </div>
    )
}

export default ProfileList;