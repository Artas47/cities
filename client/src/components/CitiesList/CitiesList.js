import React, { useEffect, useState } from 'react';
import CityCard from '../CityCard/CityCard';

const CitiesList = () => {
    const [data, setData] = useState();
    useEffect(() => {
        const fetchData = async () => { 
            await fetch('http://localhost:61365/api/cities')
            .then(res => res.json())
            .then(result => setData(result))
        }
        fetchData();
    }, []);
    if(!data){
        return <div>CHUJ</div>
    }
    return <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', position: 'relative', top: '-120px'}}>
        {data.map(city => {
           return <CityCard id={city.id} name={city.name} photo={city.photo}/>
        })}
    </div>
}

export default CitiesList;