import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { mockPopular } from "../utils/mockData";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addPopularMovies(mockPopular));
  }, [dispatch]);
};

export default usePopularMovies;
