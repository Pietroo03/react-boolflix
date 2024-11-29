import { useState, useContext } from 'react'
import { MyContext } from './context/MyContext'
import AppHeader from './components/AppHeader'
import Flag from 'react-world-flags'
import './App.css'

function App() {

  const [searchQuery, setSearchQuery] = useState('')
  const [showTitle, setShowTitles] = useState(false)
  const { movies, fetchMovies, tvSeries, fetchTvSeries } = useContext(MyContext)

  function handleInput(e) {
    const dataSearch = e.target.value
    setSearchQuery(dataSearch)
  }

  function handleSubmit() {
    if (searchQuery !== '') {
      fetchMovies(searchQuery)
      fetchTvSeries(searchQuery)
      setShowTitles(true)
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

      <AppHeader handleInput={handleInput} handleSubmit={handleSubmit} searchQuery={searchQuery} />

      <main>
        <div className="container">
          {showTitle && (
            <>
              <div className="mb-5">
                <h1 className='text-white'>Film</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                  {movies.map((movie) => (

                    <div className="movie col" key={movie.id}>
                      <div className="card movie-card h-100">
                        <div className='movie-img-container'>
                          <img
                            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                            alt=""
                            className='card-img-top movie-img'
                            style={{ height: '500px', objectFit: 'cover' }}
                          />
                        </div>
                        <div className="card-body movie-info">
                          <h3 className='card-title'>{movie.title}</h3>
                          <h6 className='card-subtitle mb-2'>{movie.original_title}</h6>
                          <div style={{ overflowX: 'hidden' }}>{movie.overview}</div>
                          <div>
                            <Flag code={languageFlag[movie.original_language] || null} style={{ width: 30, height: 30 }} />
                          </div>
                          <div className="d-flex align-items-center">
                            <span className='ms-2'>{Math.round(movie.vote_average / 2)}</span>
                            <span className='ps-2'> {renderstars(movie.vote_average)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-5">
                <h1 className='text-white'>Serie Tv</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                  {tvSeries.map((tvSerie) => (

                    <div className="tvSerie col" key={tvSerie.id}>
                      <div className="card tvSerie-card h-100">
                        <div className='tvSerie-img-container'>
                          <img
                            src={`https://image.tmdb.org/t/p/w342${tvSerie.poster_path}`}
                            alt=""
                            className='card-img-top tvSerie-img'
                            style={{ height: '500px', objectFit: 'cover' }}
                          />
                        </div>
                        <div className="card-body tvSerie-info">
                          <h3 className='card-title'>{tvSerie.title}</h3>
                          <h6 className='card-subtitle mb-2'>{tvSerie.original_title}</h6>
                          <div>{tvSerie.overview}</div>
                          <div>
                            <Flag code={languageFlag[tvSerie.original_language] || null} style={{ width: 30, height: 30 }} />
                          </div>
                          <div className="d-flex align-items-center">
                            <span className='ms-2'>{Math.round(tvSerie.vote_average / 2)}</span>
                            <span className='ps-2'> {renderstars(tvSerie.vote_average)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </main>

    </>
  )
}

export default App
