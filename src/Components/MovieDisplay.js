import React from 'react';

function MovieDisplay({movies}) {
    const theMovies = movies.map(mov => {

        return (
            <div style={{padding: '2rem'}}>
                <img src ={mov.Poster}/>
                <h4>{mov.Title}</h4>
            </div>
        )

    })
  return (
  <div style={{display:'flex', flexwrap:'wrap'}}>
      {theMovies}
  </div>
  )
}

export default MovieDisplay