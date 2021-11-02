import "./App.css";
import { Movielist } from "./Movielist";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import { Colorlist } from "./Colorlist";
import { AddMovie } from "./AddMovie";
import { useState } from "react";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import Box from '@mui/material/Box';

function App() {
  const INITIAL_MOVIES = [
    {
      name: "The Godfather",
      poster:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg ",
      rating: 9.2,
      description: `The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.`,
      trailer: "https://www.youtube.com/embed/sY1S34973zA",
    },

    {
      name: "City of God",
      poster:
        "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg ",
      rating: 8.6,
      description: `In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.`,
      trailer: "https://www.youtube.com/embed/dcUOO4Itgmw",
    },

    {
      name: "Django unchained",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg ",
      rating: 8.4,
      description: `With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi.`,
      trailer: "https://www.youtube.com/embed/0fUCuvNlOCg",
    },

    {
      name: "Good fellas",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg ",
      rating: 8.7,
      description: `The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.`,
      trailer: "https://www.youtube.com/embed/2ilzidi_J8Q",
    },

    {
      name: "The Departed",
      poster: "https://m.media-amazon.com/images/I/81ZOilPKzYL._SL1500_.jpg ",
      rating: 8.5,
      description: `An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.`,
      trailer: "https://www.youtube.com/embed/iojhqm0JTW4",
    },

    {
      name: "The Prestige",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/d/d2/Prestige_poster.jpg ",
      rating: 8.5,
      description: `After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.`,
      trailer: "https://www.youtube.com/embed/ObGVA1WOqyE",
    },

    {
      name: "Virumaandi",
      poster:
        "https://cdn.shopify.com/s/files/1/1002/7150/products/POS-200_2.jpg?v=1623655942 ",
      rating: 8.3,
      description: `A temperamental farmer gets embroiled in a bloody clan feud in a southern Tamil Nadu village.`,
      trailer: "https://www.youtube.com/embed/RVN_g9XYUsY",
    },

    {
      name: "Hey Ram",
      poster:
        "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f79f35268e21ec2ac547dd7e18adf08fc76e5d21a1f39ecda8bee89af0e5e9f4._RI_V_TTW_.jpg ",
      rating: 7.9,
      description: `Saketh Ram's wife is raped and killed during direct action day riots in Calcutta. He is convinced that Mahatma Gandhi is responsible for all the problems happening in the country and sets out to kill him.`,
      trailer: "https://www.youtube.com/embed/GKLvKk_uXzA",
    },

    {
      name: "The Dark Knight",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg ",
      rating: 9.0,
      description: `When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.`,
      trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
    },

    {
      name: "Interstellar",
      poster:
        "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg ",
      rating: 8.6,
      description: `A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.`,
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },

    {
      name: "The Shawshank Redemption",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
      rating: 9.3,
      description: `Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.`,
      trailer: "https://www.youtube.com/embed/NmzuHjWmXOc",
    },

    {
      name: "Gladiator",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
      rating: 8.5,
      description: `A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.`,
      trailer: "https://www.youtube.com/embed/owK1qxDselE",
    },

    {
      name: "Seven",
      poster:
        "https://m.media-amazon.com/images/M/MV5BNDMzZDNlYjktZTc3MS00YjBhLTk3OWUtYjE5YTZlNzBmMjA3XkEyXkFqcGdeQXVyMTAzMDM4MjM0._V1_.jpg",
      rating: 8.6,
      description: `Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.`,
      trailer: "https://www.youtube.com/embed/znmZoVkCjpI",
    },

    {
      name: "The usual suspects",
      poster: "https://flxt.tmsimg.com/assets/p16422_p_v10_af.jpg",
      rating: 8.5,
      description: `A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.`,
      trailer: "https://www.youtube.com/embed/oiXdPolca5w",
    },

    {
      name: "Taxi Driver",
      poster:
        "https://cdn.shopify.com/s/files/1/0969/9128/products/Taxi_Driver_-_Robert_De_Niro_-_Hollywood_Movie_Poster_Collection_72fc52e7-772e-4e0e-aecc-90a118aa242b.jpg?v=1557835180",
      rating: 8.2,
      description: `A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action by attempting to liberate a presidential campaign worker and an underage prostitute.`,
      trailer: "https://www.youtube.com/embed/44gB58YS53A",
    },

    {
      name: "The Matrix",
      poster:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      rating: 8.7,
      description: `When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.`,
      trailer: "https://www.youtube.com/embed/vKQi3bBA1y8",
    },
  ];
  const [movies, setMovies] = useState(INITIAL_MOVIES);
  const history = useHistory();
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


   
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{minHeight:"100vh"}} elevation={7}>
    <div className="App">
       <Box sx={{ flexGrow: 1 }}>
      <AppBar color="primary"  position="static">
      <Toolbar>
      <Button  onClick={()=> history.push("/")} color="inherit"  >Home</Button>
      <Button onClick={()=> history.push("/movies")}  color="inherit"  >Movies</Button>
      <Button onClick={()=> history.push("/add")}  color="inherit"  >Add movies</Button>
      <Button onClick={()=> history.push("/colors")}  color="inherit"  >ColorBox</Button>
      <Button   color="inherit"  >Light mode</Button>
      </Toolbar>
     
      </AppBar>
      </Box>

      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>

        <Route path="/movies">
          <Movielist movies={movies} setMovies={setMovies} />
        </Route>

        <Route path="/trailer/:id">
          <MovieDetails movies={movies} />
        </Route>

        <Route path="/add">
          <AddMovie movies={movies} setMovies={setMovies} />
        </Route>

        <Route path="/colors">
          <Colorlist />
        </Route>

        <Route path="**">
          <NotFound />
        </Route>
      </Switch>
    </div>
    </Paper>
    </ThemeProvider>
  );
}

function MovieDetails({ movies }) {
  const { id } = useParams();
  const movie = movies[id];
  const history = useHistory();
  console.log(id, movies, movie);
  return (
    <div className="movie-trailer">
      {/* <h4> Movie id : {id} </h4> */}
      <iframe
        width="100%"
        height="540"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movie-detail-container">
        <div className="movie-details">
          <h1 className="movie-name"> {movie.name} </h1>

          <p className="movie-rating">⭐{movie.rating}</p>
        </div>
        <p>{movie.description}</p>

        <div className="back-btn">
          <Button
            variant="contained"
            onClick={() => history.goBack()}
            startIcon={<ArrowBackIosIcon />}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <img
        src="https://kicksdigitalmarketing.com/wp-content/uploads/2019/09/iStock-1142986365.jpg"
        alt="404 not found"
      ></img>
    </div>
  );
}

function Welcome() {
  return <h1 className="welcome"> Welcome ALL!! 😁🙌 </h1>;
}

export default App;
