import React from 'react';
import "./CityCard.css";

const CityCard = ({photo, id, name}) => {
    return <div className='city-card'>
        <img className="img" style={{width: '100%', height: '85%'}} src={photo} />
        {name}
    </div>
}

export default CityCard;