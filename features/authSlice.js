import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        email: '',
        win: 0,
        lost: 0
    },
    reducers: {
        auth: (state, action) => {
            state.email = action.payload.email;
        },
        removeAuth: (state, action) => {
            state.email = state.email !== action.payload;
            state.win = 0;
            state.lost = 0;
        },
        win: (state) => {
            state.win += 1
        },
        lost: (state) => {
            state.lost += 1
        }
    }
});

export const { auth, removeAuth, win, lost } = authSlice.actions;

export default authSlice.reducer;