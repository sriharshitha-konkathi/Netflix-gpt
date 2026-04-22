import React from "react";
import MovieCard from "./MovieCard";

const MovieLists = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-2xl md:text-3xl py-4 font-bold text-gray-100 drop-shadow-md">{title}</h1>
      <div className="flex overflow-auto hide-scrollbar">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieLists;
