import React from "react";
import { useSelector } from "react-redux";

import "./genres.scss";
//GENRES LIKE A CATEGRAY LIKE (ACTION ,COMEDY , HOORAR ,FANY...)
const  Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home); //sare genres yha store hoghe store se...

  return (
    <div className="genres">
      {data?.map((g) => {
        if (!genres[g]?.name) return;
        return (
          <div key={g} className="genre">
            {genres[g]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
 