import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import "./CityCard.css";

const CityCard = ({photo, id, name, newPoint, city, pointOfInterestId, cityId}) => {
    if(newPoint){
        return <div style={{display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.8)'}} className='city-card'>
            <p>
                Add point of <br /> interest
            </p>
            <AddIcon style={{width: '100px', height: '100px'}} />        
    </div>
    }
    return <Link style={{textDecoration: 'none', color: '#fff'}} to={city ? `/city/${id}/pointsofinterest` : `/city/${cityId}/pointsofinterest/${id}`}>
     <div className='city-card'>
        <img className="img" style={{width: '100%', height: '85%'}} src={photo} />
        {name}
    </div>
    </Link>
}

export default CityCard;