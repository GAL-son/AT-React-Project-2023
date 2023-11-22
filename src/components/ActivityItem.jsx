import { Link } from 'react-router-dom';

import ProfilePicture from './ProfilePicture'

const ActivityItem = (props) => {
    return(
        <div className="d-flex align-items-center bg-body-secondary rounded-hard p-2 w-100 mb-1">
            <Link to='' className="d-flex w-25 align-items-center">
                <ProfilePicture style={{height: '2rem'}}/>
                <span className='ms-3' >{props.userName}</span>
            </Link>
            <span className='w-25' >{props.activityName}</span>
            <Link to='' className='w-25'>
                {props.movieTitle}
            </Link>
            <span className='me-3 flex-fill text-end'>{props.when}</span>
        </div>
    )
}

export default ActivityItem;