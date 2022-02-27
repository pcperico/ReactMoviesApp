import {Movie} from "../Models/Movie.models";
import MovieComponent from "./MovieComponent";
import css from "../Css/ListMovie.module.css";

import GenericListComponent from "./GenericListComponent";
export default function ListMoviesComponent(props: moviesListProps)
{    
    return (
        <GenericListComponent list={props.movies}>
            <div className={css.div}>
            {
                props.movies?.map(m=><MovieComponent movie={m} key={m.id}/>)
            }
            </div>
            </GenericListComponent>            
        );        
}

interface moviesListProps
{
    movies?:Movie[]
}