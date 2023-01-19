import React from 'react';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import RecordView from '../../components/Recorder';
import { Typography } from '@mui/material';

export default function SendMessageVoice() {

    const handleSendVoice = () => {
        console.log("Sending Voice");
            

    }


    return(
        <Box sx={{position: 'absolute', width: '90%'}}>
            <Stack sx={{flexDirection: 'column'}}>
                <RecordView />
                <Button onClick={() => handleSendVoice()}  variant="contained" size="large" sx={{ marginTop: 2, width: '30%'}}>
                    Send Voice Call
                </Button>
            </Stack>
        </Box>
    ); 
}

