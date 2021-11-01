import "./App.css";
import { Movielist } from "./Movielist";
import { Switch, Route, Link, useParams } from "react-router-dom";
import { Colorlist } from "./Colorlist";
import { AddMovie } from "./AddMovie";
import { useState } from "react";

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
  ];
  const [movies, setMovies] = useState(INITIAL_MOVIES);

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          
          <li>
            <Link to="/movies">Movies</Link>
          </li>

  
          <li>
            <Link to="/add">Add movies</Link>
          </li>

          <li>
            <Link to="/colors">ColorBox</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>

        <Route path="/movies">
          <Movielist movies={movies} />
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
  );
}

function MovieDetails({ movies }) {
  const { id } = useParams();
  const movie = movies[id];
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
  return <h1> Welcome ALL!! 😁🙌 </h1>;
}

export default App;
