import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, coverImg, title,rating, genres}) {
    return (
        <div>
            <img src={coverImg} alt={title}/>
            <h2><Link to={`/movie/${id}`}>{title}</Link> ⭐{rating} </h2>
            <ul>
                {genres.map((g)=> (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.propTypes= {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;