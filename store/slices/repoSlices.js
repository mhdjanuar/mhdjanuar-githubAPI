import { createSlice } from '@reduxjs/toolkit'

/**
 * Create a slice as a reducer containing actions.
 *
 * In this example actions are included in the slice. It is fine and can be
 * changed based on your needs.
 */

const initialState = {
    loading: 'idle',
    repos: [],
}

export const reposSlice = createSlice({
    name: 'repos',
    initialState,
    reducers: {
        reposLoading(state, action) {
            // Use a "state machine" approach for loading state instead of booleans
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        },
        reposReceived(state, action) {
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.repos = action.payload
            }
        },
    },
});


// Exports all actions
export const { reposLoading, reposReceived } = reposSlice.actions

// Define a thunk that dispatches those action creators
export const fetchRepos = () => async (dispatch) => {
    dispatch(reposLoading())
    const response = await fetch('https://api.github.com/users/mhdjanuar/repos?sort=created&direction=desc');
    const dataRepos = await response.json()
    dispatch(reposReceived(dataRepos))
}

export default reposSlice.reducer;