import { useState } from "react";
import { Counter } from "./Counter";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import {useHistory} from "react-router-dom";

export function Movie({ name, poster, rating, description, id }) {
  const [show, setshow] = useState(false);
  const styles = { display: show ? "block" : "none" };
  const history = useHistory();
  return (
    <div className="movie-container">
      <img className="movie-poster" src={poster} alt={name} />

      <div className="movie-details">
        <h1 className="movie-name"> {name} </h1>
        <IconButton 
        onClick={()=> history.push("/trailer/"+id)}
        color="primary" 
        aria-label="movie-info-button">
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

      <Counter />
    </div>
  );
}
