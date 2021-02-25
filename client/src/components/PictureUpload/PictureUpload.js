import React, { useEffect, useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useDropzone} from 'react-dropzone';
import { Box, Button, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(() => ({
    imagePreview: {
        width: 'auto',
        height: 'auto',
        maxHeight: '400px',
        maxWidth: '100%'
    },
    imageWrapper: {
        maxWidth: '90%',
        maxHeight: '500px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center'
    }
}));

const PictureUpload = (props) => {
    const { open, onClose, name, desc } = props;
    const [originalImgSrc, setOriginalImgSrc] = useState('');

    const [activeStep, setActiveStep] = React.useState(0);
    const [error, setError] = useState(null);

    const classes = useStyles();

    useEffect(() => {
        return () => resetImage();
    }, [open]);

    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        if(rejectedFiles.length){
            setError(rejectedFiles[0].errors[0].message);
            return;
        }
        if(acceptedFiles.length){
            const reader = new FileReader();
            reader.readAsDataURL(acceptedFiles[0]);
            reader.onload = () => {
                setOriginalImgSrc(reader.result);
            };
        }
    }, []);

    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        disabled: activeStep !== 0,
        noClick: !!originalImgSrc,
        accept: 'image/jpeg, image/png, image/jpg',
        maxFiles: 1
    });

    const resetImage = () => {
        setOriginalImgSrc('');
        setActiveStep(0);
        setError(null);
    };
    
    const onImageSave = () => {
        setError('');
        const data = {
            name,
            description: desc,
            photo: originalImgSrc
        };
        if(!name || !desc || !originalImgSrc){
            setError('Some data is missing. Name, description and image are required.');
        }
        if(!error){
            fetch("http://localhost:61365/api/cities/3/pointsofinterest",
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(data)
            })
            .then(function(res){ return res.json(); })
            .then(function(data){ console.log('zz',data) })
        }
    };

    return (
        <>
                <Box {...getRootProps()} style={{ padding: '10px', border: '1px dashed #c4c4c4'}}>
                    <input {...getInputProps()} />
                    <Box className={classes.imageWrapper}>
                        {!originalImgSrc && <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' height='400px' textAlign='center'>
                            <Typography variant='subtitle1' color='textSecondary'>Drop file <br /> or</Typography>
                            <Button style={{margin: '20px 0 40px 0'}} variant='contained' color='primary'>Select file</Button>
                            <Typography variant='subtitle1' color='textSecondary'>Accepted formats: png, jpg</Typography>
                        </Box>}
                        {originalImgSrc && activeStep === 0 && <img className={classes.imagePreview} src={originalImgSrc} />}
                    </Box>
                </Box>
                <Box height='40px' display='flex' alignItems='center' >
                    {activeStep === 0 && originalImgSrc && <>
                        <IconButton onClick={() => {
                            setOriginalImgSrc('');
                            setError(null);
                        }}>
                            <DeleteIcon color='action' />
                        </IconButton>
                        <Typography variant='subtitle1' color='textSecondary'>or drop new image</Typography>
                    </>
                    }
                </Box>
                {error && error}
                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
                    <Button color="primary" onClick={onClose}>
                    Cancel
                    </Button>
                    <div>
                        <Button style={{marginLeft: '20px'}} variant="contained" color="primary" onClick={onImageSave}>
                            Add
                        </Button>
                    </div>
                </div>
        </>
    );
};

export default React.memo(PictureUpload);