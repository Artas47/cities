import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PointOfInterestDetails = () => {
    const [data, setData] = useState();
    const params = useParams();
    console.log(params)
    useEffect(() => {
        const fetchData = async () => { 
            await fetch(`http://localhost:61365/api/cities/${params.cityId}/pointsofinterest/${params.pointsOfInterestId}`)
            .then(res => res.json())
            .then(result => setData(result))
        }
        fetchData();
    }, []);

    if(!data){
        return <div>No data</div>
    }
    
    return <div style={{marginTop: '50px', width: '100%'}}>
    <img className="img" style={{width: '25%', height: 'auto'}} src={data.photo} />
    <div style={{backgroundColor: 'rgba(0,0,0,0.4)', width: '40%', margin: '0 auto', padding: '5px'}}>
     <p>{data.name}</p>
     <p>{data.description}</p>
    </div>
</div>
}

export default PointOfInterestDetails;