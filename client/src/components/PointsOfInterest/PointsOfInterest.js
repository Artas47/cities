import { CircularProgress, Fade } from '@material-ui/core';
import { CallMerge } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CityCard from '../CityCard/CityCard';
import '../../loader.css';

const PointsOfInterest = () => {
    const params = useParams();
    const [isLoading, setIsLoading] = useState();
    const [data, setData] = useState();
    console.log('gfdsgsfd', data);
    useEffect(() => {
        const fetchData = async () => { 
            setIsLoading(true);
            await fetch(`http://localhost:61365/api/cities/${params.cityId}?includepointsofinterest=true`)
            .then(res => res.json())
            .then(result => setData(result.pointsOfInterest))
            setIsLoading(false);
        }
        fetchData();
    }, []);

    const onDeleteHandler = (cityId, pointOfInterestId) => {
        setIsLoading(true);
        fetch(`http://localhost:61365/api/cities/${cityId}/pointsofinterest/${pointOfInterestId}`, {
            method: 'DELETE',
            })
            .then(res => res.json()) // or res.json()
            .then(res => console.log(res))
        setData(data.filter(poi => poi.id !== pointOfInterestId))
        setIsLoading(false);
    }

    if(!data && !isLoading){
        return <div>No data</div>
    }
    if(isLoading){
        return <div className="loader"></div>
    }

    console.log(isLoading)

    return <Fade in={true}>
        <div>
            <h1 style={{fontWeight: '300', textAlign: 'left'}}>
            Paris <br />
            <span style={{fontSize: '35px'}}>
            Points of interest
            </span>
            </h1>
            <div style={{display: 'flex', position: 'relative', flexWrap: 'wrap', justifyContent: 'center', position: 'relative'}}>
            <CityCard newPoint/>
            {data && data.map(poi => {
                return <CityCard id={poi.id} name={poi.name} photo={poi.photo} cityId={params.cityId} onDeleteHandler={onDeleteHandler} />
            })}
            </div>
        </div>
    </Fade>
}

export default PointsOfInterest;