import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Stack } from '@mui/system';
import SendMessageSMS from './SendMessageSms';

export default function SendMessage() {
  const [value, setValue] = React.useState('sms');

  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', position: 'absolute', top: 80 }}>
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
        {value === 'sms' && <SendMessageSMS />}        
      </Stack>
    </Box>
  );
}