import { Movie } from "../Models/Movie.models";
import css from "../Css/SingleMovie.module.css";

export default function MovieComponent(props:SingleMovieProps)
{
    const buildLink= ()=> `/movie/${props.movie.id}` ;
    return(
      <div className={css.div}> 
          <a href={buildLink()}>
              <img src={props.movie.poster} alt="Poster" />
              <p>
                  <a href={buildLink()}>{props.movie.title}</a>
              </p>
          </a>
      </div>
  );
}

interface SingleMovieProps
{
    movie:Movie
}