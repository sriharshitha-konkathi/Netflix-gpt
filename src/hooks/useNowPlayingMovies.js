import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { mockNowPlaying } from "../utils/mockData";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addNowPlayingMovies(mockNowPlaying));
  }, [dispatch]);
};

export default useNowPlayingMovies;
