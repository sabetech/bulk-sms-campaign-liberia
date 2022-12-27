import * as React from 'react';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function ImportFileButton() {

    const handleFileOpenDialog = () => {
        //open modal from here
        console.log("Open file dialog");

        
    };

    return(
        <Button onClick={handleFileOpenDialog} variant="contained" color="primary" size="large" startIcon={<CloudUploadIcon />} sx={{float: "right", height: 70}}>
            Contacts Via Spreadsheet
        </Button>
    );
}
