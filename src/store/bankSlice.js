import { createSlice } from '@reduxjs/toolkit';


const bankSlice = createSlice({
    name: 'bank',
    initialState: {
        bank_id: null,
        balance: null,
        transactions: [], 
    },
    reducers: { 
        setBalance: (state, action) => {
            state.balance = action.payload;
        },
        setBank: (state, actions) => {
            state.bank_id = actions.payload;
        },
        setTransactions: (state, actions) => {
            state.transactions = actions.payload;
        },
     },
});

export const { setBalance, setBank, setTransactions } = bankSlice.actions;
export default bankSlice.reducer;
