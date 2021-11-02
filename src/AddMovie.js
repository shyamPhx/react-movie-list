import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";


export function AddMovie({ movies, setMovies }) {
  const [name, setName] = useState(" ");
  const [poster, setPoster] = useState(" ");
  const [rating, setRating] = useState(" ");
  const [description, setDescription] = useState(" ");
  const [Trailer, setTrailer] = useState(" ");
  const setMovieName = (event) => setName(event.target.value);
  const resetmovieform = () => {
    setName("");
    setPoster("");
    setRating("");
    setDescription("");
    setTrailer("");
  };
  const addmovie = () => {
    console.log({ name, poster, rating, description,Trailer });
    const newMovie = { name, poster, rating, description,Trailer };
    setMovies([...movies, newMovie]);
    resetmovieform();
  };
  return (
    <div className="movie-form">
      <TextField
        placeholder="name"
        onChange={setMovieName}
        label="Name"
        variant="outlined"
        color="error" />

      <TextField
        placeholder="poster url"
        onChange={(event) => setPoster(event.target.value)}
        label="Poster url"
        variant="outlined"
        color="error" />

      <TextField
        placeholder="rating"
        onChange={(event) => setRating(event.target.value)}
        label="Rating"
        variant="outlined"
        color="error" />

      <TextField
        placeholder="description"
        onChange={(event) => setDescription(event.target.value)}
        label="Description"
        variant="outlined"
        color="error" />

       <TextField
        placeholder="Trailer"
        onChange={(event) => setTrailer(event.target.value)}
        label="Trailer"
        variant="outlined"
        color="error"
        />



      <Button onClick={addmovie} variant="contained" color="error">
        SAVE
      </Button>
    </div>
  );
}



// function EditMovie({ movies, setMovies }) {
//   const [name, setName] = useState(" ");
//   const [poster, setPoster] = useState(" ");
//   const [rating, setRating] = useState(" ");
//   const [description, setDescription] = useState(" ");
//   const [Trailer, setTrailer] = useState(" ");
//   const setMovieName = (event) => setName(event.target.value);
//   const resetmovieform = () => {
//     setName("");
//     setPoster("");
//     setRating("");
//     setDescription("");
//     setTrailer("");
//   };
//   const editmovie = () => {
//     console.log({ name, poster, rating, description,Trailer });
//     const newMovie = { name, poster, rating, description,Trailer };
//     setMovies([...movies, newMovie]);
//     resetmovieform();
//   };
//   return (
//     <div className="movie-form">
//       <TextField
//         placeholder="name"
//         onChange={setMovieName}
//         label="Name"
//         variant="outlined"
//         color="error" />

//       <TextField
//         placeholder="poster url"
//         onChange={(event) => setPoster(event.target.value)}
//         label="Poster url"
//         variant="outlined"
//         color="error" />

//       <TextField
//         placeholder="rating"
//         onChange={(event) => setRating(event.target.value)}
//         label="Rating"
//         variant="outlined"
//         color="error" />

//       <TextField
//         placeholder="description"
//         onChange={(event) => setDescription(event.target.value)}
//         label="Description"
//         variant="outlined"
//         color="error" />

//        <TextField
//         placeholder="Trailer"
//         onChange={(event) => setTrailer(event.target.value)}
//         label="Trailer"
//         variant="outlined"
//         color="error"
//         />



//       <Button onClick={editmovie} variant="contained" color="success">
//         SAVE
//       </Button>
//     </div>
//   );
// }







