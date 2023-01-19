import { Stack } from "@mui/material";
import { useReactMediaRecorder } from "react-media-recorder";

const RecordView = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true });

  return (
    <Stack>
      <p>Audio Recorder Status: {status}</p>
      <audio src={mediaBlobUrl} controls autoPlay />
      <Stack direction="row" spacing={2} sx={{marginTop: 2}}>
        <button onClick={startRecording} disabled={status === 'recording'}>Start Recording</button>
        <button onClick={stopRecording} disabled={status !== 'recording'}>Stop Recording</button>
      </Stack>
      
    </Stack>
  );
};

export default RecordView;