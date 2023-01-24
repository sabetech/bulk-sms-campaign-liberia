import React from 'react';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

export default function SendMessageSMS() {

    const handleSendSMS = () => {
        console.log("Sending SMS");
    }

    return(
        <Box sx={{position: 'absolute', width: '90%'}}>
            <Stack sx={{flexDirection: 'column'}}>
                <TextField
                    id="message-content"
                    label="Type Your Message"
                    multiline
                    rows={4}
                    defaultValue="Your Message goes here"
                    sx={{width: '60%'}}
                />
                <Button onClick={() => handleSendSMS()}  variant="contained" size="large" sx={{ marginTop: 2, width: '20%'}}>
                    Send SMS
                </Button>
            </Stack>
        </Box>
    ); 
}

