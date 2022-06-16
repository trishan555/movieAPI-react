import { useEffect } from 'react';
import './App.css';


const movie1 = {
  "Title": "Batman Returns",
  "Year": "1992",
  "imdbID": "tt0103776",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"

}
   
const App = () => {
  const searchMovie = async(title) =>{
    const response = await fetch(`${process.env.REACT_APP_API_URL}&s=batman`)
    const data = await response.json()
    console.log(data.Search)
  }

  useEffect(() => {
    searchMovie('batman')

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
        <div>
          {movie1.Year}
        </div>
        <div>
          <img src= {movie1.Poster} alt = {movie1.Title}/>
        </div>
        <div>
          {movie1.Title}
        </div>
      </div>
  
    </div>
  );
}

export default App;
