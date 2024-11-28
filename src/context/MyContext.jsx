import { createContext, useState } from "react";

export const MyContext = createContext()

const API_KEY = process.env.API_KEY
const URL_movie = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`

export const MyContextData = ({ children }) => {

    const [movies, setMovies] = useState([])

    const fetchMovies = (searchQuery) => {
        fetch(`${URL_movie}${searchQuery}`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                setMovies(data.results)
            })
            .catch(error => {
                console.error('Errore nella richiesta', error);
            })
    }

    return (
        <MyContext.Provider value={{ movies, fetchMovies }}>
            {children}
        </MyContext.Provider>
    )
}