import PropTypes from "prop-types";

export function Filter ({setFilter, filter}){
    return(
        <input 
            placeholder="Search Movies" 
            onChange={(e) => setFilter(e.target.value)} 
            value={filter} 
        />
    );
}

// Proptype for the filter and isFilter states
Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired
}