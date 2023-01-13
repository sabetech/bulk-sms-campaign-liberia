import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { appStates } from '../resources/constants';
import { createPeople } from '../service/api';

export const sendSMSToGroup = createAsyncThunk('messaging/sendSMSToGroup', async (token, { rejectWithValue } ) => {

});

export const uploadContacts = createAsyncThunk('people/uploadPeopleToInfoBip', async (people, { rejectWithValue } ) => {
    try{
        const response = await createPeople(people);
        return response.data;
    }catch ( err ) {
        console.log(err);
        return rejectWithValue(err.message);
    }
});

export const getPeopleFromInfoBip = createAsyncThunk('people/getPeopleFromInfoBip', async ({ rejectWithValue } ) => {   

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
            .addCase(uploadPeopleToInfobip.pending, (state) => {
                state.status = appStates.LOADING;
            })
            .addCase(uploadPeopleToInfobip.fulfilled, (state, action) => {
                state.status = appStates.IDLE;
            })
            .addCase(uploadPeopleToInfobip.rejected, (state, action) => {
                state.status = appStates.IDLE;
                state.error = action.payload;
            })
        }
    }
});

export default campaignSlice.reducer;