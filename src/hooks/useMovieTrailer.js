import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constant';

const useMovieTrailer = ({ movieId }) => {
  const dispatch = useDispatch();

  //fetching the trailer video and updating the store

  useEffect(() => {
    movieVideo();
  }, []);

  const movieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === 'Trailer');
    const trailer = filterData[0];
    dispatch(addTrailerVideo(trailer));
  };
};

export default useMovieTrailer;
