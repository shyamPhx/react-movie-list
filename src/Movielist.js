
import { Movie } from "./Movie";


export function Movielist({movies, setMovies}) {
 
  return (
    <section>
      

      <div className="movie-list">
        {movies.map((mv, index) => (
          <Movie
            key={index}
            name={mv.name}
            poster={mv.poster}
            rating={mv.rating}
            description={mv.description}
            id={index}
            setMovies={setMovies}
            movies={movies}
            
          />
        ))}
    
     
      </div>
    </section>
  );
}
