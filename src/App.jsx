import { useState, useContext } from 'react'
import { MyContext } from './context/MyContext'
import Flag from 'react-world-flags'
import './App.css'

function App() {

  const [searchQuery, setSearchQuery] = useState('')
  const { movies, fetchMovies, tvSeries, fetchTvSeries } = useContext(MyContext)

  function handleInput(e) {
    const dataSearch = e.target.value
    setSearchQuery(dataSearch)
  }

  function handleSubmit() {
    if (searchQuery !== '') {
      fetchMovies(searchQuery)
      fetchTvSeries(searchQuery)
    }
  }

  const languageFlag = {
    en: 'US',
    it: 'IT',
    fr: 'FR',
    es: 'ES',
    de: 'DE',
    ja: 'JP',
    zh: 'CN',
    ko: 'KR'
  };

  return (
    <>
      <div className='input-search'>
        <input
          type="text"
          value={searchQuery}
          onChange={handleInput}
          placeholder='Cerca un film...'
        />

        <button type='submit' onClick={handleSubmit}>Cerca</button>
      </div>

      <div className='list-movies'>
        {movies.map((movie) => (
          <div className="movie" key={movie.id}>
            <h1>{movie.title}</h1>
            <h4>{movie.original_title}</h4>
            <div>
              <Flag code={languageFlag[movie.original_language] || null} style={{ width: 30, height: 30 }} />
            </div>

            <div>{movie.vote_average}</div>
          </div>
        ))}
      </div>

      <div className='list-tvSeries'>
        {tvSeries.map((tvSerie) => (
          <div className="tv-serie" key={tvSerie.id}>
            <h1>{tvSerie.name}</h1>
            <h4>{tvSerie.original_name}</h4>
            <div>
              <Flag code={languageFlag[tvSerie.original_language] || null} style={{ width: 30, height: 30 }} />
            </div>

            <div>{tvSerie.vote_average}</div>
          </div>
        ))}
      </div>

    </>
  )
}

export default App
