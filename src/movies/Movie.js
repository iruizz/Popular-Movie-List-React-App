import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function Movie({movie, config}){

    return(
    <li>
        {/* Creates specific movie path for routing the selected movie to its detail page */}
        <Link to={`/movie/${movie.id}`}>
        {/* Displays movie image if config.images is defined and if it has a property called base_url.*/}
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
    // Movie requires an id, title, and poster path for proper rendering
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
    }).isRequired,
    // Configuration includes image base_url
    config: PropTypes.shape({
        images: PropTypes.shape({
            base_url: PropTypes.string,
        })
    }),
}
