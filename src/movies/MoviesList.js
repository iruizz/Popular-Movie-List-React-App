import {useState, useEffect} from "react"
import {Movie} from "./Movie"
import {Filter} from "../Filter"

// constants for making TMDB API calls
const API_URL = 
  "https://api.themoviedb.org/3/discover/movie?&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=";

const CONFIG_URL = 
  "https://api.themoviedb.org/3/configuration?api_key=";

export function MoviesList(){
    // const [stateName, setStateName] = useState(initialState);
    const [ filter, setFilter] = useState("");
    // stores movies, initially empty array
    const [movies, setMovies] = useState([]);
    // stores images info
    const [config, setConfig] = useState({});

    // Function to fetch list of movie from TMDB API
    const getMovies = async () =>{
        try{
          const res = await fetch(API_URL + process.env.REACT_APP_API_KEY);
          const movies = await res.json();
          setMovies(movies.results);
        }catch(e){
            console.error(e);
        }
    }

    // Function to make configure API call, needed to fetch movie image
    const getConfig = async () =>{
      try{
        const res = await fetch(CONFIG_URL + process.env.REACT_APP_API_KEY);
        const config = await res.json();
        setConfig(config);
      }catch(e){
          console.error(e);
      }
  }

    // this useEffect runs getMovies() on mount (start),
    // limits number of times movies are fetched from API
    useEffect( () => {
      getMovies();
      getConfig();
    }, [])

    return(
        <div>
            {/* Filter.js component used*/}
            <Filter filter={filter} setFilter={setFilter} />

            <ul className="movies-list">
                {/*map displays the movies based on filter (if any)*/}
                {movies.filter((movie) =>
                    movie.title.toLowerCase().includes(filter.toLowerCase())
                ).map(( movie )=> (
                    <Movie key={movie.id} movie={movie} config={config} />
                )
                )}

                {/*could do this too (longer version), the version above is implicit removes 'return'
                {movies.filter((movie) => {
                   return  movie.name.toLowerCase().includes(filter.toLowerCase());
                }).map(( movie )=> {
                    return(
                      // Also created/added Movie component
                        <li key={movie.name}>{movie.name} Rating: {movie.rating}</li>
                    )
                })}
                */}
            </ul>
        </div>
    )
}