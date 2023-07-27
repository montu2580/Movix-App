import React, { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";//COMPONET

import useFetch from "../../../hooks/useFetch";

const Trending = () => {
    const [endpoint, setEndpoint] = useState("day"); //api m bhejenge

    const { data, loading } = useFetch(`/trending/movie/${endpoint}`); //yha yr data api se mil rha hai

    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                {/* DYNAMIC(ARRAY BNAHENGE) H OR BHI KUCH ADD KR SKTE LIKE MONTH YEAR */}
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} /> 
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
            
        </div>
    );
};

export default Trending;
