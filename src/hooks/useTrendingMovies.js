import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { mockTrending } from "../utils/mockData";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addTrendingMovies(mockTrending));
  }, [dispatch]);
};

export default useTrendingMovies;
