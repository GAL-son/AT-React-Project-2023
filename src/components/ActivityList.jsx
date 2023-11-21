import ActivityItem from "./ActivityItem";

const ActivityList = (params) => {

    const isAcrivity = () => {
        if(params.activities === undefined || params.activities == []) {
            return <span>NO ACRIVITY</span>
        } else {
            return(
                params.activities.map(x =>
                            <ActivityItem
                                userName={x.userName}
                                activityName={x.activ}
                                movieTitle={x.title}
                                when={x.date}
                                />
                            )
                )
        }
    }

    return(
        <div className="d-flex flex-column align-items-center w-100">
            {isAcrivity()}
        </div>
    )
}

export default ActivityList;