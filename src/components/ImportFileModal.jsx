import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as XLSX from 'xlsx';

export default function ImportFileFormDialog({open, setOpen}) {
  const [selectedFile, setSelectedFile] = React.useState();
  const [uploadedFile, setUploadedFile] = React.useState("No File uploaded");
  const [contacts, setContacts] = React.useState([]);

  const onFileChange = event => {
     
    // Update the state
    setUploadedFile(event.target.files[0].name);
    setSelectedFile(event.target.files[0] );
   
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFileUpload = (e) => {
    e.preventDefault();
    console.log("FILE IS HERE:::", selectedFile);

    const file = selectedFile;
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, {
        type: 'binary'
      });
      workbook.SheetNames.forEach(sheet => {
        let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
        setContacts(rowObject);
      })
    };
    reader.readAsBinaryString(file);
  }

  React.useEffect(() => {
    console.log("CONTACTS:::", contacts);

    //Send Contacts Array to server

  }, [contacts]);

  return (
    <div>
      <form encType="multipart/form-data" method="POST">
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Import Spreadsheet</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{marginBottom: 2}}>
              To Import contacts, import a spreadsheet with fields. Download this template to begin
            </DialogContentText>
            <Button variant="contained" component="label">
              Upload
              <input onChange={onFileChange} hidden accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" type="file" />
            </Button>
            <span style={{marginLeft: 10}}>{uploadedFile}</span>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleFileUpload}>Upload</Button>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
}