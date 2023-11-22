import MovieCover from "../components/MovieCover";
import MovieListPreview from "../components/MovieListPreview";
import ProfileList from "../components/ProfileList";

import '../css/moviePage.css'

const testUsers = ["Galson", "Anna", "Persiciara", "Sol"]

const MoviePage = (params) => {
    const checkMovie = () => {
        return params.movie !== undefined;
    }

    return(
        <div className="container-fluid p-2">
            <div className="container-fluid d-flex flex-row mb-3">
                <div className="w-100">
                    <MovieCover />
                </div>
                <div className="flex-shrink">
                    <h1>{checkMovie() ? params.movie.title : "NO TITLE"}</h1>
                    <div className="d-flex flex-row justify-content-between" id="aditional-info">
                        <span>Year: 1999</span><span>Lenght: 2h 69m</span><span>Country: Denmark</span>
                    </div>
                    <p className="text-wrap">{checkMovie() ? params.title.description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis ultrices urna. Cras efficitur blandit urna, sit amet accumsan augue dictum vitae. Aliquam lobortis scelerisque orci ac maximus. Pellentesque at ipsum id diam scelerisque porta a at massa. Nulla feugiat urna ipsum, eget congue dolor gravida ut. Aenean lacus nulla, tincidunt nec ipsum et, porttitor auctor felis. Sed sagittis, odio ac vestibulum placerat, arcu dolor ullamcorper lorem, eu tincidunt eros odio quis est. Nunc sit amet dui semper, pretium velit ac, blandit arcu. Ut maximus cursus libero, non accumsan magna fermentum at. Sed hendrerit, lectus quis molestie placerat, tortor turpis lobortis ligula, euismod pellentesque velit nunc sed neque."}</p>
                </div>
            </div>
            <div className="mb-2">
                <h4>Watcheed by:</h4>
                <ProfileList profiles={testUsers}/>
            </div>
            <div className="mb-2">
                <h4>Similar Movies</h4>
                <MovieListPreview/>
            </div>
        </div>
    )
}

export default MoviePage;