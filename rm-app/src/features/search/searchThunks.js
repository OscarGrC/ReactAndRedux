import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSearchResults = createAsyncThunk(
    'search/fetchSearchResults',
    async (query) => {
        const response = await fetch(
            `https://api.unsplash.com/search/photos?query=${query}&per_page=20&page=1&client_id=uoxX9Z7KM0QQXlfHCbh0e95o5UMq05AMit4q7yfx4Ic`
        );
        const data = await response.json();
        return data.results;
    }
);
