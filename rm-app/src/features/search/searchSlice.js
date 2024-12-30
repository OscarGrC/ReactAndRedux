import { createSlice } from '@reduxjs/toolkit';
import { fetchSearchResults } from './searchThunks';


export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        results: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearchResults.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSearchResults.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.results = action.payload;
            })
            .addCase(fetchSearchResults.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});
export const getSearchResults = (state) => state.search.results;
export const getSearchStatus = (state) => state.search.status;
export const getSearchError = (state) => state.search.error;
export default searchSlice.reducer;
