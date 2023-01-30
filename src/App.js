import React, { useEffect, useState } from 'react'
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'



export default function App() {
    const API_URL = 'http://www.omdbapi.com/?apikey=3e7aac5f&'

    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const serachMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        setMovies(data.Search)
    }

    useEffect(() => {
        serachMovies('Batman')
    }, [])

  return (
    <div className='app' >
        <h1>FilmField</h1>

        <div className='search' >
            <input placeholder='Ex: Superman...' value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />
            <img src={SearchIcon} alt='Search'
            onClick={() => serachMovies(searchTerm)}/>
        </div>

        {movies?.length > 0 ? (
                <div className='container' >
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            ) : (
                <div className='empty' >
                    <h1>No Movies found !</h1>
                </div>
            )
        }
    </div>
  )
}
