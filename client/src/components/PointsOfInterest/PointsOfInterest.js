import { CircularProgress, Dialog, DialogContent, Fade, TextField } from '@material-ui/core';
import { CallMerge } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CityCard from '../CityCard/CityCard';
import '../../loader.css';
import PictureUpload from '../PictureUpload/PictureUpload';

const PointsOfInterest = () => {
    const params = useParams();
    const [isLoading, setIsLoading] = useState();
    const [data, setData] = useState();
    const [open, setOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [poiId, setPoiId] = useState(null);
    const [poiName, setPoiName] = useState('');
    const [initialData, setInitialData] = useState({
        name: '',
        description: '',
        photo: ''
    });

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

    const handleClose = () => {
        setOpen(false);
    }

    return <>
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent style={{width: '500px', backgroundColor: 'rgba(0,0,0,0.2)'}}>
        <p style={{textAlign: 'center', fontSize: '24px', fontWeight: 500}}>{isEditing ? `Update "${poiName}" point of interest` : 'New point of interest'}</p>
        <div style={{display: 'flex', flexDirection: 'column', width: '80%', margin: '0 auto'}}>
            <TextField value={initialData.name} onChange={(e) => {setInitialData({...initialData, name: e.target.value})}} label="Name" id="standard-size-small" variant="filled" style={{marginBottom: '40px'}} />
            <TextField value={initialData.description} onChange={(e) => setInitialData({...initialData, description: e.target.value})} label="Description" id="standard-size-normal" variant="filled" style={{marginBottom: '40px'}}/>
        </div>
        <PictureUpload poiId={poiId} setIsEditing={setIsEditing} isEditing={isEditing} photo={initialData.photo} setInitialData={setInitialData} name={initialData.name} desc={initialData.description} cityData={data} setData={setData} onClose={handleClose} />
        </DialogContent>
      </Dialog>
    <Fade in={true}>
        <div>
            <h1 style={{fontWeight: '300', textAlign: 'left'}}>
            Paris <br />
            <span style={{fontSize: '35px'}}>
            Points of interest
            </span>
            </h1>
            <div style={{display: 'flex', position: 'relative', flexWrap: 'wrap', justifyContent: 'center', position: 'relative'}}>
            <CityCard  setOpen={setOpen} onNewPoiAdd={() => setOpen(true)} newPoint/>
            {data && data.map(poi => {
                return <CityCard setPoiId={setPoiId} setPoiName={setPoiName} setInitialData={setInitialData} id={poi.id} poi={poi} setOpen={setOpen} name={poi.name} photo={poi.photo} cityId={params.cityId} onDeleteHandler={onDeleteHandler} />
            })}
            </div>
        </div>
    </Fade> 
    </>
}

export default PointsOfInterest;