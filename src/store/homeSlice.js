//react-toolkit - https://www.npmjs.com/package/@reduxjs/toolkit
// refrence - https://react-redux.js.org/tutorials/quick-start
import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name: "home",
    initialState: {
        url: {},
        genres: {}, //genres mean type like comaday action --api call krwa k genres ka data isme store krwa lenge fir khi dubar call nhi krenge sirf is state ko use kr lenge
    },
    reducers: {
        // state= above initialState ,and action hum pass krenge 
        getApiConfiguration: (state, action) => {
            state.url = action.payload;
        },
        getGenres: (state, action) => {
            state.genres = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getGenres } = homeSlice.actions;

export default homeSlice.reducer;
