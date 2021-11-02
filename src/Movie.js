import { useState } from "react";
import { Counter } from "./Counter";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { useHistory } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';

export function Movie({
  name,
  poster,
  rating,
  description,
  id,
  setMovies,
  movies,
}) {
  const [show, setshow] = useState(false);
  const styles = { display: show ? "block" : "none" };
  const history = useHistory();
  return (
    <div className="movie-container">
      <img className="movie-poster" src={poster} alt={name} />

      <div className="movie-details">
        <h1 className="movie-name"> {name} </h1>
        <IconButton
          onClick={() => history.push("/trailer/" + id)}
          color="primary"
          aria-label="movie-info-button"
        >
          <InfoIcon />
        </IconButton>
        <p className="movie-rating">⭐{rating}</p>
      </div>
      <button onClick={() => setshow(!show)} className="movie-show-button">
        {show ? "Hide" : "show"} description
      </button>
      <p style={styles} className="movie-description">
        {" "}
        {description}{" "}
      </p>

      <div className="delete-edit-movie">
        <Counter />
        <IconButton
              onClick={() => {
                console.log(id, movies);
                const remainingMovies = movies.filter((mv, index) => index != id);
                console.log(remainingMovies);
                setMovies(remainingMovies);
              }}
              color="error"
              aria-label="delete-movie"
            >
              <DeleteIcon className="btn3" />
            </IconButton>

            <IconButton
              onClick={() => history.push("/add/" + id)}
              
              color="secondary"
              aria-label="edit-movie"
            >
              <EditIcon className="btn3" />
            </IconButton>
       
      </div>
    </div>
  );
}
