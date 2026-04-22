import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { mockUpcoming } from "../utils/mockData";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addUpComingMovies(mockUpcoming));
  }, [dispatch]);
};

export default useUpComingMovies;
