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

  const renderstars = (rating) => {
    let stars = []
    const fullstars = Math.round(rating / 2)
    for (let i = 0; i < 5; i++) {
      if (i < fullstars) {
        stars.push(<i key={i} className='bi bi-star-fill' style={{ color: 'gold' }}></i>)
      } else {
        stars.push(<i key={i} className='bi bi-star'></i>)
      }
    }
    return stars
  }

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
            <div>
              <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="" />
            </div>
            <h4>{movie.original_title}</h4>
            <div>
              <Flag code={languageFlag[movie.original_language] || null} style={{ width: 30, height: 30 }} />
            </div>

            <span className='ms-2'>{Math.round(movie.vote_average / 2)}</span>
            <span> {renderstars(movie.vote_average)}</span>
          </div>
        ))}
      </div>

      <div className='list-tvSeries'>
        {tvSeries.map((tvSerie) => (
          <div className="tv-serie" key={tvSerie.id}>
            <h1>{tvSerie.name}</h1>
            <div>

              <img src={`https://image.tmdb.org/t/p/w342${tvSerie.poster_path}`} alt="" />
            </div>
            <h4>{tvSerie.original_name}</h4>
            <div>
              <Flag code={languageFlag[tvSerie.original_language] || null} style={{ width: 30, height: 30 }} />
            </div>

            <span className='ms-2'>{Math.round(tvSerie.vote_average / 2)}</span>
            <span> {renderstars(tvSerie.vote_average)}</span>
          </div>
        ))}
      </div>

    </>
  )
}

export default App
