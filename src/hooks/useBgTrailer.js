import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { mockTrailerVideo } from "../utils/mockData";

const useBgTrailer = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addTrailerVideo(mockTrailerVideo));
  }, [dispatch, movieId]);
};

export default useBgTrailer;
