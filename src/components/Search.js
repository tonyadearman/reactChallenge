import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchResults from './SearchResults';

const Search = () => {

    const [searchValue, setSearchValue] = useState("")
    const [TVShows, setTVShows] = useState([]);

    async function getTVShowNames(){
        // console.log("function get tv shows called")

      /*  Query http://api.tvmaze.com/search/shows?q={substr} (replace substr with your search criterion). 
- Store each show meeting the search criterion.
- Sort the shows in ascending order by name.
- Print to the console the sorted TV show names. */
        const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchValue}`)
        const moviesData = response.data.map(movie => movie.show);
        console.log(moviesData);
        const results = moviesData.sort((a, b) => a.name.localeCompare(b.name));

        setTVShows(results);


    }

    // useEffect(() => {
    //     getTVShowNames()
    // }, [searchValue])

  return (
    <div className=''>
      <form onSubmit={(e)=> {e.preventDefault(); getTVShowNames()}} className="mb-4">
          <div className="row">
            <div className='col-auto'>
              <input className='form-control' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} /> 
            </div>
            <div className='col-auto'>
                <button type='submit' className='btn btn-primary'>Search</button>
            </div>
          </div>
      </form>
      {Object.keys(TVShows).length > 0 && <SearchResults TVShows={TVShows}/>}
    </div>
  )
}

export default Search