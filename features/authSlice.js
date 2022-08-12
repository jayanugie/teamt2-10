import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        email: ''
    },
    reducers: {
        auth: (state, action) => {
            state.email = action.payload.email;
        },
        removeAuth: (state, action) => {
            state.email = state.email !== action.payload;
        }
    }
});

export const { auth, removeAuth } = authSlice.actions;

export default authSlice.reducer;