import ActivityList from "../components/ActivityList";
import MovieListPreview from "../components/MovieListPreview";

const fakeActivity = [
    {
        userName: "Galson",
        activ: "Is planing to watch",
        title: "Transformers 2: Revenge of the Fallen",
        date: "21-11-2023"
    },
    {
        userName: "Galson",
        activ: "Watched",
        title: "Avengers: Endgame",
        date: "02-11-2023"
    }
]

const Discover = () => {
    return(
        <div className="container-fluid m-2">
            <h1>Discover</h1>
            <div className="container-fluid d-flex">
                <div className="">
                    <h3>New movies</h3>
                    <div><MovieListPreview limit="3"/></div>
                </div>
                <div  className="">
                    <h3>Popular movies</h3>
                    <div><MovieListPreview limit="3"/></div>
                </div>
            </div>
            <div className="container-fluid mt-4">
                <h3>Friends Activity</h3>
                <ActivityList activities={fakeActivity}/>
            </div>
        </div>
    )
}
export default Discover;