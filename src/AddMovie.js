import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";


export function AddMovie({ movies, setMovies }) {
  const [name, setName] = useState(" ");
  const [poster, setPoster] = useState(" ");
  const [rating, setRating] = useState(" ");
  const [description, setDescription] = useState(" ");
  const setMovieName = (event) => setName(event.target.value);
  const resetmovieform = () => {
    setName("");
    setPoster("");
    setRating("");
    setDescription("");
  };
  const addmovie = () => {
    console.log({ name, poster, rating, description });
    const newMovie = { name, poster, rating, description };
    setMovies([...movies, newMovie]);
    resetmovieform();
  };
  return (
    <div className="movie-form">
      <TextField
        placeholder="name"
        onChange={setMovieName}
        label="Name"
        variant="outlined" />

      <TextField
        placeholder="poster url"
        onChange={(event) => setPoster(event.target.value)}
        label="Poster url"
        variant="outlined" />

      <TextField
        placeholder="rating"
        onChange={(event) => setRating(event.target.value)}
        label="Rating"
        variant="outlined" />

      <TextField
        placeholder="description"
        onChange={(event) => setDescription(event.target.value)}
        label="Description"
        variant="outlined" />

      <Button onClick={addmovie} variant="contained">
        Add movie
      </Button>
    </div>
  );
}
