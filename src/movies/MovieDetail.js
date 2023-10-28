import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// constants for making TMDB API calls

const BASE_URL = "https://api.themoviedb.org/3/movie/";
const IMAGE_URL = "https://image.tmdb.org/t/p/";
const BACKDROP_SIZE ="original";
const POSTER_SIZE ="w342";
const API_KEY = "?api_key=";


export function MovieDetail(){
    
    // store parameters passed in from parent ":id" in variable "id"
    const { id } = useParams();
    // stores movie details, initially empty 
    const [movie, setMovie] = useState({}); 

    // function that fetches movie details and stores them in state
    const getMovie = async () =>{
        try{
          const res = await fetch(BASE_URL + id + API_KEY + process.env.REACT_APP_API_KEY);
          const newMovie = await res.json();
          setMovie(newMovie);
        }catch(e){
            console.error(e);
        }
    }

    // waits for id to have a value before loading page content
    useEffect( () =>{
        getMovie();
    }, [id])

    // this code is reached before useEffect runs, precaution to avoid errors, 
    //load nothing and then useEffect will render infomration once it is reached
    if(!movie.title) return null;

    return(
        <div>
            {/* Backdrop image */}
            <img 
            className="backdrop"
            src={IMAGE_URL + BACKDROP_SIZE + movie.backdrop_path} 
            alt={movie.title + " Backdrop"}
            />
            {/* Details Section */}
            <div className="detail-details">

            {/* Poster image */}
            <img 
                className="detail-poster"
                src={IMAGE_URL + POSTER_SIZE + movie.poster_path} 
                alt={movie.title + " Poster"}
                />
                <div>
                    <h1>{movie.title}!</h1>
                    <p>{movie.overview} </p>
                    {/* Creates list of genres */}
                    <ul className="detail-genre-list"> 
                        {movie.genres.map((genre) => {
                            return <li key={genre.id}>{genre.name}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );

}