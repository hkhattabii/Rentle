import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAlarmHubState } from "./types";

const initialState: IAlarmHubState = {
    leases: []
}


const alarmHubSlice =  createSlice({
    name: "alarmHub",
    initialState,
    reducers: {
        onDueAlarm(state, action: PayloadAction<IAlarmHubState> ) {
            const { leases } = action.payload
            state.leases = leases
        }
    }
})

export const { onDueAlarm } = alarmHubSlice.actions

export default alarmHubSlice.reducer