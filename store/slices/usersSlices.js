import { createSlice } from '@reduxjs/toolkit'

/**
 * Create a slice as a reducer containing actions.
 *
 * In this example actions are included in the slice. It is fine and can be
 * changed based on your needs.
 */

const initialState = {
    loading: 'idle',
    users: [],
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        usersLoading(state, action) {
            // Use a "state machine" approach for loading state instead of booleans
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        },
        usersReceived(state, action) {
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.users = action.payload
            }
        },
    },
});


// Exports all actions
export const { usersLoading, usersReceived } = userSlice.actions

// Define a thunk that dispatches those action creators
export const fetchUsers = () => async (dispatch) => {
    dispatch(usersLoading())
    const response = await fetch('https://api.github.com/users/mhdjanuar/repos');
    const dataUsers = await response.json()
    dispatch(usersReceived(dataUsers))
}

export default userSlice.reducer;