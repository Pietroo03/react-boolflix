import { useState, useContext } from 'react'
import { MyContext } from './context/MyContext'
import './App.css'

function App() {

  const [searchQuery, setSearchQuery] = useState('')
  const { fetchMovies } = useContext(MyContext)

  function handleInput(e) {
    const dataSearch = e.target.value
    setSearchQuery(dataSearch)
  }

  function handleSubmit() {
    if (searchQuery !== '') {
      fetchMovies(searchQuery)
    }
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
    </>
  )
}

export default App
