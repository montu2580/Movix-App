import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = { //fix syntex
    Authorization: "bearer " + TMDB_TOKEN,
};

// axio call krwa per jo bhi data milega wo data k ander save jrwa rhe 
export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {headers,params,});
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
