import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { mockTopRated } from "../utils/mockData";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addTopRatedMovies(mockTopRated));
  }, [dispatch]);
};

export default useTopRatedMovies;
