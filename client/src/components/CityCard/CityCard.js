import React from 'react';
import { Link, useParams } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import "./CityCard.css";
import { IconButton } from '@material-ui/core';

const CityCard = ({photo, id, name, newPoint, city, pointOfInterestId, cityId, onDeleteHandler, onNewPoiAdd, setOpen}) => {
    const params = useParams();
    if(newPoint){
        return <div onClick={onNewPoiAdd} style={{display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.8)'}} className='city-card'>
            <p>
                Add point of <br /> interest
            </p>
            <AddIcon style={{width: '100px', height: '100px'}} />        
    </div>
    }
    return <div className='city-card' style={{position: 'relative'}}>
        {!city && <IconButton onClick={() => onDeleteHandler(params.cityId, id)} style={{position: 'absolute', zIndex: '999', top: '3px', right: '3px', height: '50px', width: '50px', backgroundColor: 'rgba(0,0,0,0.4)'}}>
            <CloseIcon style={{ width: '35px', height: '35px', color: '#fff'}}/>
        </IconButton>}
         <Link style={{textDecoration: 'none', color: '#fff'}} to={city ? `/city/${id}/pointsofinterest` : `/city/${cityId}/pointsofinterest/${id}`}>
            <img className="img" style={{width: '100%', height: '85%'}} src={photo} />
            {name}
         </Link>
    </div>
}

export default CityCard;