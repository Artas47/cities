import { CircularProgress } from '@material-ui/core';
import { computeHeadingLevel } from '@testing-library/react';
import { Fade } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PointOfInterestDetails = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState();
    const params = useParams();
    useEffect(() => {
        try{
            const fetchData = async () => { 
                setIsLoading(true);
                await fetch(`http://localhost:61365/api/cities/${params.cityId}/pointsofinterest/${params.pointsOfInterestId}`)
                .then(res => res.json())
                .then(result => setData(result))
                setIsLoading(false);
            }
            fetchData();
        } catch(err){
            console.log(err)
        }
    }, []);

    
    if(!data && !isLoading){
        return <div>No data</div>
    }
    if(isLoading){
        return <div className="loader"></div>
    }
    
    return (
    <Fade in={true}> 
        <div style={{marginTop: '50px', width: '100%'}}>
    <img className="img" style={{width: '25%', height: 'auto'}} src={data.photo} />
    <div style={{backgroundColor: 'rgba(0,0,0,0.4)', width: '40%', margin: '0 auto', padding: '5px'}}>
     <p>{data.name}</p>
     <p>{data.description}</p>
    </div>
    </div>
    </Fade>
)
}

export default PointOfInterestDetails;