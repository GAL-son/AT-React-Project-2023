import MovieListPreview from "../components/MovieListPreview";
import ProfileLink from "../components/ProfileLink";
import ProfileList from "../components/ProfileList";
import ProfilePicture from "../components/ProfilePicture";

const testFriends = ['Antony',"Anna123","TestNull","Robert"]

const testParams = {
    username: 'Test123',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam a earum ipsa eligendi molestiae id dicta quidem, dolor possimus doloremque, vel totam iusto distinctio numquam unde enim sapiente tempore maxime.'
}

const Profile = (params) => {

    return(
        <div className="container-fluid">
            <div className="d-flex flex-row bg mb-2">                
            <div>
                    <h1>{testParams.username}</h1>
                    <p>{testParams.desc}</p>
                    <div>
                    <h3>Friends</h3>
                        <ProfileList profileList={testFriends}/>
                    </div>
                </div>
               
                <div className='m-4'><ProfilePicture style={{height: '14rem'}}/></div>
           </div>
           <div>
            <h3>Watched movies</h3>
            <MovieListPreview/>
            <h3>Favourite Movies</h3>
            <MovieListPreview/>
            <h3>Planed to watch</h3>
            <MovieListPreview/>
           </div>
        </div>
    )
}

export default Profile;