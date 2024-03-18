import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div>
       <MovieList title={"Now Playing"} movies={movies.nowPlaying} />
    </div>
  )
}

export default SecondaryContainer