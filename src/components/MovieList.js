import React from 'react';
import Movie from './Movie';


const movieList = (props) => {
  let movieList = props.listMovies.map( (movie) => <Movie obj={movie} /> );

  return (
            <div className="row">
              {movieList}
            </div>
          );
}

export default movieList;
