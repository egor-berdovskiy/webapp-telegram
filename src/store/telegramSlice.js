import { createSlice } from '@reduxjs/toolkit';


const telegramSlice = createSlice({
    name: 'telegram',
    initialState: { user: null },
    reducers: { 
        setUserData: (state, action) => {
            state.user = action.payload;
        },
     },
});

export const { setUserData } = telegramSlice.actions;
export default telegramSlice.reducer;
