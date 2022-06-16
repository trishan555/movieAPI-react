import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './components/MovieCard';
   
const App = () => {
  const [movies, setMovies] = useState([])

  const [search, setSearch] = useState()

  const searchMovie = async(title) =>{
    const response = await fetch(`${process.env.REACT_APP_API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovie('batman')

  }, [])

  return (
    <div className="App">
      <div>
        <input
          placeholder='Search for movies'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      
        <button
          onClick={() => searchMovie(search) }
        >Search</button>
      </div>

      <div>
        {
          movies.map((movie) =>(
            <MovieCard movie={movie} />
          ))
        }
      </div>
  
    </div>
  );
}

export default App;
