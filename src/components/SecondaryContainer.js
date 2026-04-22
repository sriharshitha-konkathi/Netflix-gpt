import React from "react";
import MovieLists from "./MovieLists";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="-mt-60 relative z-20 space-y-10 px-6 pb-20">
      <MovieLists
        title={"Now playing"}
        movies={movies?.nowPlayingMovies || []}
      />
      <MovieLists title={"Top Rated"} movies={movies?.topRatedMovies || []} />
      <MovieLists title={"Popular"} movies={movies?.popularMovies || []} />
      <MovieLists title={"Upcoming"} movies={movies?.upComingMovies || []} />
      <MovieLists title={"Trending"} movies={movies?.nowPlayingMovies || []} />
    </div>
  );
};

export default SecondaryContainer;
