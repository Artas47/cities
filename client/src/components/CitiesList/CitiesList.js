import { Fade } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import CityCard from '../CityCard/CityCard';

const CitiesList = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState();
    useEffect(() => {
        const fetchData = async () => { 
            setIsLoading(true);
            await fetch('http://localhost:61365/api/cities')
            .then(res => res.json())
            .then(result => setData(result))
            setIsLoading(false);
        }
        fetchData();
    }, []);

    if(!data && !isLoading){
        return <div>No data</div>
    }
    if(isLoading){
        return <div className="loader"></div>
    }

    return <Fade in={true}>
        <div>
            <h1 style={{fontWeight: '300', textAlign: 'left'}}>
            Cities
            </h1>
            <div style={{display: 'flex', position: 'relative', flexWrap: 'wrap', justifyContent: 'center', position: 'relative'}}>
            {data.map(city => {
                console.log(city)
                return <CityCard id={city.id} name={city.name} photo={city.photo} city/>
            })}
            </div>
        </div>
    </Fade>
}

export default CitiesList;