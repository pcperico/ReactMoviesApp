import {Movie} from "../Models/Movie.models";
import MovieComponent from "./MovieComponent";
import css from "../Css/ListMovie.module.css";
import LoadingComponent from "./LoadingComponent";
export default function ListMoviesComponent(props: moviesListProps)
{
    if(!props.movies)
    {
        return (<LoadingComponent />);
    }
    else if(props.movies.length===0)
    {
        return (<span>No data to show</span>)
    }
    else
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
}

interface moviesListProps
{
    movies?:Movie[]
}