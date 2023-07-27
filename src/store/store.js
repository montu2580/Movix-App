// hmare reduct store se jitni bhi file and state rehne wali h wo sab isi folder m rhegi 
//react-toolkit - https://www.npmjs.com/package/@reduxjs/toolkit
import { configureStore } from "@reduxjs/toolkit";

import homeSlice from "./homeSlice";

export const store = configureStore({
    reducer: {
        // key:value 
        home: homeSlice,
    },
});
