import {Movie} from "../Models/Movie.models";
import MovieComponent from "./MovieComponent";
import css from "../Css/ListMovie.module.css";
export default function ListMoviesComponent(props: moviesListProps)
{
 return (
     <div className={css.div}>
         {
             props.movies.map(m=>
                <MovieComponent movie={m} key={m.id}/>
             )
         }
     </div>
 );
}

interface moviesListProps
{
    movies:Movie[]
}