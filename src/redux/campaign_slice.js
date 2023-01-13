import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { appStates, storageKeys } from '../constants';

export const sendSMSToGroup = createAsyncThunk('messaging/sendSMSToGroup', async (token, { rejectWithValue } ) => {

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
        }
    }
});