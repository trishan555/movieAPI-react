import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './components/MovieCard';
   
const App = () => {
  const [movies, setMovies] = useState([])

  const searchMovie = async() =>{
    const response = await fetch(`${process.env.REACT_APP_API_URL}&s=spiderman`)
    const data = await response.json()
    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovie()

  }, [])

  return (
    <div className="App">
      <div>
        <input
          placeholder='Search for movies'
          value='Superman'
          onChange={() => {}}
        />
      
        <button
          onClick={() => {}}
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
