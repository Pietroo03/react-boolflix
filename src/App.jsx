import { useState, useContext } from 'react'
import { MyContext } from './context/MyContext'
import Flag from 'react-country-flag'
import { IT, US, FR, ES, JP, GB, DE, CN, KR, RU } from 'country-flag-icons/react/3x2'
import './App.css'

function App() {

  const [searchQuery, setSearchQuery] = useState('')
  const { movies, fetchMovies } = useContext(MyContext)

  function handleInput(e) {
    const dataSearch = e.target.value
    setSearchQuery(dataSearch)
  }

  function handleSubmit() {
    if (searchQuery !== '') {
      fetchMovies(searchQuery)
    }
  }

  const languageFlag = {
    'it': IT,
    'en': US,
    'fr': FR,
    'es': ES,
    'ja': JP,
    'gb': GB,
    'de': DE,
    'cn': CN,
    'ko': KR,
    'ru': RU
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

            <Flag
            />

            <div>{movie.vote_average}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
