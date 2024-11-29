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

      <header>
        <div className='input-search m-4 d-flex align-items-center justify-content-between'>
          <div>
            <h1>LOGO</h1>
          </div>
          <div className='d-flex'>
            <input
              className='form-control w-auto'
              type="text"
              value={searchQuery}
              onChange={handleInput}
              placeholder='Cerca film o serie TV...'
            />
            <div className='ps-4'>
              <button type='submit' onClick={handleSubmit} className='btn btn-secondary ms-2'>Cerca</button>
            </div>
          </div>
        </div>

      </header>

      <main>
        <div className="container">
          <div className="mb-5">
            <h1>Film</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {movies.map((movie) => (

                <div className="movie col" key={movie.id}>
                  <div className="card h-100">
                    <img
                      src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                      alt=""
                      className='card-img-top'
                      style={{ height: '500px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                      <h4 className='card-title'>{movie.title}</h4>
                      <h6 className='card-subtitle mb-2 text-muted'>{movie.original_title}</h6>
                      <div>
                        <Flag code={languageFlag[movie.original_language] || null} style={{ width: 30, height: 30 }} />
                      </div>
                      <div className="d-flex align-items-center">
                        <span className='ms-2'>{Math.round(movie.vote_average / 2)}</span>
                        <span> {renderstars(movie.vote_average)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-5">
            <h1>Serie Tv</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {tvSeries.map((tvSerie) => (

                <div className="tvSerie col" key={tvSerie.id}>
                  <div className="card h-100">
                    <img
                      src={`https://image.tmdb.org/t/p/w342${tvSerie.poster_path}`}
                      alt=""
                      className='card-img-top'
                      style={{ height: '500px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                      <h4 className='card-title'>{tvSerie.title}</h4>
                      <h6 className='card-subtitle mb-2 text-muted'>{tvSerie.original_title}</h6>
                      <div>
                        <Flag code={languageFlag[tvSerie.original_language] || null} style={{ width: 30, height: 30 }} />
                      </div>
                      <div className="d-flex align-items-center">
                        <span className='ms-2'>{Math.round(tvSerie.vote_average / 2)}</span>
                        <span> {renderstars(tvSerie.vote_average)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

    </>
  )
}

export default App
