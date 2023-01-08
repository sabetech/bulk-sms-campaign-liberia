import React from 'react';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import CustomizedTagInput from '../../components/CustomizedTagInput';
import { Label } from '@mui/icons-material';
import { Typography } from '@mui/material';

export default function SendMessage() {
    return(
        <Box sx={{position: 'absolute', top: '15%', padding: 5, width: '90%'}}>
            <Stack sx={{flexDirection: 'column'}}>
                <CustomizedTagInput />
                <Typography sx={{marginTop: 10, marginBottom: 1}}>Message Subject</Typography>
                <TextField  
                    id="message-subject"
                    label="Subject"
                    sx={{width: '60%'}}
                />
                <Typography sx={{marginTop: 3, marginBottom: 1}}>Message</Typography>
                <TextField
                    id="message-content"
                    label="Type Your Message"
                    multiline
                    rows={4}
                    defaultValue="Your Message goes here"
                    sx={{width: '60%'}}
                />
                <Button variant="contained" size="large" sx={{ marginTop: 2, width: '10%'}}>
                    Send
                </Button>
            </Stack>
        </Box>
    ); 
}

