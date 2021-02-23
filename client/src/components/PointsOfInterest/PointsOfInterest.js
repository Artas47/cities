import { CallMerge } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CityCard from '../CityCard/CityCard';

const PointsOfInterest = () => {
    const params = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => { 
            await fetch(`http://localhost:61365/api/cities/${params.cityId}?includepointsofinterest=true`)
            .then(res => res.json())
            .then(result => setData(result))
        }
        fetchData();
    }, []);

    if(!data){
        return <div>No data</div>
    }

    return <div>
        <h1 style={{fontWeight: '300', textAlign: 'left'}}>
          Paris <br />
          <span style={{fontSize: '35px'}}>
           Points of interest
          </span>
        </h1>
        <div style={{display: 'flex', position: 'relative', flexWrap: 'wrap', justifyContent: 'center', position: 'relative'}}>
        <CityCard newPoint/>
        {data.pointsOfInterest.map(poi => {
            return <CityCard id={poi.id} name={poi.name} photo={poi.photo} cityId={params.cityId} />
        })}
        </div>
    </div>
}

export default PointsOfInterest;