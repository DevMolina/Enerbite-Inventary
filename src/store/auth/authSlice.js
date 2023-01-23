import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        displayName: null,
        errorMessage: null
    },
    reducers: {
        login: (state, action) => {
            state.status = 'authenticated';
            state.displayName = action.payload;
            state.errorMessage = null;
        },
        logout: (state, action) => {
            state.status = 'not-authenticated';
            state.displayName = null;
            state.errorMessage = action.payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;