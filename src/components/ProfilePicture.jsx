import noPicture from '../assets/profileNoPicture.png'

const ProfilePicture = (params) => {
    const getProfilePicture = () => {
        if(params.src === undefined) return noPicture;
        else return params.src;
    }

    return (
        <img className="rounded-circle m-0" style={params.style} src={getProfilePicture()}></img>
    )
    

}

export default ProfilePicture;