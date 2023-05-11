import React, { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs"; //date ka format chage ke=rke daal rhe hai

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster2.png";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";

import "./carousel.scss";

const Carousel = ({ data, loading, endpoint, title }) => {
  const carouselContainer = useRef(); //react m kisi bhi node ko select ref use krke krte h jaise js m (document.quearySelector.getelementbyid)  like
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  const navigation = (dir) => {
    //dekstop m lef to write scrool kr rhe..
    const container = carouselContainer.current;
    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20) //20 bcz padding wgera add h so
        : container.scrollLeft + (container.offsetWidth + 20);
    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const skItem = () => {
    return (
      //   ther skeleton class write in index.scss
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="carousel">
      <ContentWrapper>
        {title && <div className="carouselTitle">{title}</div>}
        <BsFillArrowLeftCircleFill //LEFT ARROW
          className="carouselLeftNav arrow"
          onClick={() => navigation("left")}
          size={42}
        />
        <BsFillArrowRightCircleFill //RIGHT ARROW
          className="carouselRighttNav arrow"
          onClick={() => navigation("right")}
          size={42}
          style={{
            boxshadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
          }}

        />
        {!loading ? (
          <div className="carouselItems" ref={carouselContainer}>
            {data?.map((item) => {
              const posterUrl = item.poster_path
                ? url.poster + item.poster_path
                : PosterFallback; //SERVER SE NHI MILE THO FOLDER KI PIC ADD HO JAHEGI
              return (
                <div
                  key={item.id}
                  className="carouselItem"
                  onClick={() =>
                    navigate(`/${item.media_type || endpoint}/${item.id}`)
                  }
                >
                  <div className="card">
                    <div className="posterBlock">
                      <Img src={posterUrl} />
                      <CircleRating rating={item.vote_average.toFixed(1)} />
                      <Genres data={item.genre_ids.slice(0, 2)} />
                    </div>
                    <div className="textBlock">
                      <span className="title">{item.title || item.name}</span>
                      <span className="date">
                        {dayjs(item.release_Date).format("MMM D, YYYY")}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loadingSkeleton">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
