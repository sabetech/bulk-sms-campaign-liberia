import * as React from 'react';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ImportSpreadSheetModal from './ImportFileModal';

export default function ImportFileButton() {

    const [modalOpen, setModalOpen] = React.useState(false);

    const handleFileOpenDialog = () => {
        //open modal from here
        setModalOpen(true);
    };

    return(
        <React.Fragment>
            <Button onClick={handleFileOpenDialog} variant="contained" color="primary" size="large" startIcon={<CloudUploadIcon />} sx={{float: "right", height: 70}}>
                Contacts Via Spreadsheet
            </Button>

            <ImportSpreadSheetModal open={modalOpen} setOpen={setModalOpen}/>
        </React.Fragment>
    );
}
