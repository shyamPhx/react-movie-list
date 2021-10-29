import { useState } from "react";
import { Counter } from "./Counter";



export function Movie({ name, poster, rating, description,  }) {
  const [show, setshow] = useState(false);
  const styles = { display: show ? "block" : "none" };
  
  return (
    <div className="movie-container">
      <img className="movie-poster" src={poster} alt={name} />

      <div className="movie-details">
        <h1 className="movie-name"> {name} </h1>
        
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
