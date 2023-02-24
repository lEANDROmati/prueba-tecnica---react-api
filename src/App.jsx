
import { useEffect, useState } from "react"
import { useForm } from "./hooks/useForm"


function App() {
  
  const {search  , handleSubmit} = useForm()
  const [movies , setMovies] = useState([])
  


  useEffect(()=>{
      fetch(`https://www.omdbapi.com/?apikey=4287ad07&s=${search}`)
      .then(res => res.json())
      .then(response => setMovies(response.Search))
  },[search])


  return (
    <div>   
      <h1>peliculasOMD</h1>
      <form onSubmit={handleSubmit}>

        <input type="text" name="add"  placeholder="marvel,DC,spiderMan,ironman... " />
        <button >search</button>

      </form>
      <ul>
       {search ?(  
          movies?.map( movie =>
           
           
             <li key={movie.imdbID}>
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <img src={movie.Poster} alt={movie.Title} />
            </li>
           
         
          )
        ) 
       
       : ( <h1>sin resultados</h1> ) }
      </ul>


    </div>
  )
}

export default App
