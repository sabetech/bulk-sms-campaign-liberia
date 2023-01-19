import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Stack } from '@mui/system';
import CustomizedTagInput from '../../components/CustomizedTagInput';
import SendMessageSMS from './SendMessageSms';
import SendMessageVoice from './SendVoiceMessage';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function SendMessage() {
  const [value, setValue] = React.useState('sms');

  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', position: 'absolute', top: 80 }}>
        <CustomizedTagInput />
        <Typography sx={{marginBottom: 1}}>Message Subject</Typography>
        <TextField  
            id="message-subject"
            label="Subject"
            sx={{width: '60%'}}
        />
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="sms" label="SMS" />
        <Tab value="voice" label="Voice" />
      </Tabs>
      <Stack>
        {value === 'voice' && <SendMessageVoice /> }       
        {value === 'sms' && <SendMessageSMS />} 
      </Stack>
    </Box>
  );
}