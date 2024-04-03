import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constant';

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUpcomingMovies();
  }, []);

  const getUpcomingMovies = async () => {
    let data = await fetch(
      'https://api.themoviedb.org/3/movie/upcoming?&page=1',
      API_OPTIONS
    );
    let json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };
};

export default useUpcomingMovies;
