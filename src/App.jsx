import { useState, useContext } from 'react'
import { MyContext } from './context/MyContext'
import './App.css'

function App() {

  const [searchQuery, setSearchQuery] = useState('')
  const { movies, fetchMovies } = useContext(MyContext)

  return (
    <>
      <div className='input-search'>
        <input
          type="text"
          value={ }
          onChange={ }
          placeholder='Cerca un film...'
        />

        <button type='submit' onClick={ }>Cerca</button>
      </div>
    </>
  )
}

export default App
