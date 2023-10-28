import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function Movie({movie, config}){

    return(
    <li>
        <Link to={`/movie/${movie.id}`}>
        {config.images?.base_url && (
        <img 
        src={config.images.base_url + "w342" + movie.poster_path} 
        alt={movie.title + " Poster"}
        />
        )}
        </Link>
    </li>
    );
}

// PropType, shape defines an object and the object paramaters are defined inside of it (for debugging)
Movie.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
    }).isRequired,
    config: PropTypes.shape({
        images: PropTypes.shape({
            base_url: PropTypes.string,
        })
    }),
}
