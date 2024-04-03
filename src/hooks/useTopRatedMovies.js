import { useDispatch } from 'react-redux';
import { addTopRatedrMovies } from '../utils/movieSlice';
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constant';

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {
    let data = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?page=1',
      API_OPTIONS
    );
    let json = await data.json();
    dispatch(addTopRatedrMovies(json.results));
  };
};

export default useTopRatedMovies;
