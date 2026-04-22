import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  const finalPoster = posterPath.startsWith("http") ? posterPath : IMG_CDN_URL + posterPath;
  return (
    <div className="w-40 pr-5">
      <img alt="Movie card" src={finalPoster} className="rounded" />
    </div>
  );
};

export default MovieCard;
