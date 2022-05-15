import React from 'react'

const SearchResults = ({TVShows}) => {
    console.log("TV SHows data in SEarch results", TVShows)
  return (
    <div className='row'>
       {Object.keys(TVShows).length > 0 &&
        <div>
            {TVShows.map((movie, index) => (
                <div className='col-12' key={index}>
                    <div className='card mx-auto'>
                        <div className='img-wrapper'>
                        <img className='img-fluid' src={movie?.image?.medium} />
                        </div>
                        <h2>{movie?.name}</h2>
                    </div>
                    <hr />
                </div>
                
            ))}
        </div>
       }
    </div>
  )
}

export default SearchResults