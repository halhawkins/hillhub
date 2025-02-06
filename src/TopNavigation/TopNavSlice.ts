import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    viewSelection: 'bills',
};

export const mainViewSlice = createSlice({
    name: 'viewSelection',
    initialState,
    reducers: {
        setView: (state, action) => {
            state.viewSelection = action.payload;
        }
    }
})

export const { setView } = mainViewSlice.actions;
export default mainViewSlice.reducer;