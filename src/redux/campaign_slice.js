import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { appStates } from '../resources/constants';
import { createPeopleInfoBip } from '../service/api';

export const sendSMSToGroup = createAsyncThunk('messaging/sendSMSToGroup', async (token, { rejectWithValue } ) => {

});

export const uploadContacts = createAsyncThunk('people/uploadPeopleToInfoBip', async (people, { rejectWithValue } ) => {
    try{
        const response = await createPeopleInfoBip(people);
        return response.data;
    }catch ( err ) {
        console.log("ERROR IN SLICE:::", err);
        return rejectWithValue(err.message());
    }
});

export const getPeopleFromInfoBip = createAsyncThunk('people/getPeopleFromInfoBip', async ({ rejectWithValue } ) => {   
    try{
        const response = await getPeople();
    }catch( err ) {
        return rejectWithValue(err.message);
    }
});

export const campaignSlice = createSlice({
    name: 'campaign_slice',
    initialState: {
        contacts: [],
        groups: [],
        messages: [],
        status: appStates.IDLE,
        error: null,
    },
    reducers: {
        setIdle: (state) => {
            state.status = appStates.IDLE;
        },
        extraReducers(builder) {
            builder
            .addCase(sendSMSToGroup.pending, (state) => {
                state.status = appStates.LOADING;
            })
            .addCase(sendSMSToGroup.fulfilled, (state, action) => {
                state.status = appStates.IDLE;
            })
            .addCase(sendSMSToGroup.rejected, (state, action) => {
                state.status = appStates.IDLE;
                state.error = action.payload;
            })
            .addCase(uploadContacts.pending, (state) => {
                console.log("UPLOADING >...");
                state.status = appStates.UPLOADING_SPREADSHEET;
            })
            .addCase(uploadContacts.fulfilled, (state, action) => {
                state.status = appStates.IDLE;
            })
            .addCase(uploadContacts.rejected, (state, action) => {
                state.status = appStates.IDLE;
                console.log("BAD :::", action.payload)
                state.error = action.payload;
            })
        }
    }
});

export const getStatus = (state) => state?.campaignReducer?.status
export default campaignSlice.reducer;