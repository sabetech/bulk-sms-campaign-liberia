import React, {useState} from "react";
import Box  from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { Table, TableCell, TableRow, TableHead, TableBody } from "@mui/material";
import Title from "../../components/Title";
import { Link } from "react-router-dom";

export default function Home() {
    
    return(
        <div style={{position: 'absolute', top: '20%', width: '100%'}}>
            <Stack sx={{flexDirection: 'row'}}>
                <Box
                    sx={{
                        width: 350,
                        height: 200,
                        backgroundColor: 'primary.dark',
                        borderRadius: 2,
                        marginRight: 5
                    }}
                >
                    <Stack sx={{ padding: 3 }}>
                        <Typography sx={{color: 'white', fontSize: 24 }}>
                            X Number of Messages Sent
                        </Typography>
                        <Typography sx={{color: 'white', fontSize: 24 }}>
                            Y Number of Messages Remaining
                        </Typography>
                    </Stack>
                </Box>

                <Box
                    sx={{
                        width: 350,
                        height: 200,
                        backgroundColor: 'primary.dark',
                        borderRadius: 2
                    }}
                >
                    <Stack sx={{ padding: 3 }}>
                        <Typography sx={{color: 'white', fontSize: 24 }}>
                            X Messages Delivered
                        </Typography>
                        <Typography sx={{color: 'white', fontSize: 24 }}>
                            Y Messages Failed
                        </Typography>
                    </Stack>
                </Box>
            </Stack>
            <Paper sx={{marginTop: 10, width: '70%'}}>
                <Box sx={{padding: 2}}>
                    <RecentMessages />
                </Box>
            </Paper>
        </div>
    ); 
}

function RecentMessages() {
    const [rows, setRows] = useState([]);
    
    function preventDefault(event) {
        event.preventDefault();
    }

    return (
        <React.Fragment>
          <Title>Recent Messages</Title>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Message</TableCell>
                <TableCell>People Reached</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.shipTo}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
            See more messages
          </Link>
        </React.Fragment>
    );
}
