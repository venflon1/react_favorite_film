import React from 'react';
import Movie from './Movie';
import NoFound from './NoFound';


const movieList = (props) => {
  let movieList = null;
  if(props.listMovies == null)
    movieList = <NoFound />;
  else
    movieList = props.listMovies.map( (movie) => <Movie obj={movie} /> );

  return (
            <div className="row">
              {movieList}
            </div>
          );
}

export default movieList;
