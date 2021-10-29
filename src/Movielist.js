
import { Movie } from "./Movie";


export function Movielist({movies}) {
 
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
          />
        ))}
      </div>
    </section>
  );
}
