import { useState, useContext } from 'react'
import { MyContext } from './context/MyContext'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
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

      <AppMain showTitle={showTitle} movies={movies} tvSeries={tvSeries} renderstars={renderstars} />

    </>
  )
}

export default App
