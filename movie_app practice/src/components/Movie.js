import React from "react";
import PropTypes from "prop-types";
import './Movie.css';
import { Link } from "react-router-dom";
import Detail from "../routes/Detail";

function Movie({title, year, summary, poster, genres}){
    return(
    <div className="movie">
        <Link to={{
            pathname:'/movie-detail',
            state:{year, title, summary, poster, genres},
        }}>
        <img src={poster} alt={title} title={title} onClick={Detail}/>
        {/* <div className="movie_data">

        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        
        <ul className="movie_genres">
            {genres.map((genre,index)=>(
                <li key={index} className="genres_genre">{genre}</li>
            ))}
        </ul>
        <p className="movie_summary">{summary.slice(0,180)}...</p>
        </div> */}
        </Link>
    </div>
        );
}

Movie.propTypes={
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;
