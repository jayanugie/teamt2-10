import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        username: '',
        win: 0,
        lost: 0
    },
    reducers: {
        auth: (state, action) => {
            state.username = action.payload.username;
        },
        removeAuth: (state, action) => {
            state.username = state.username !== action.payload;
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