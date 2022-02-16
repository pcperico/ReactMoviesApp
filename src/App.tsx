import './App.css';
import { Movie } from './Models/Movie.models';
import ListMoviesComponent from './Components/ListMoviesComponent';

function App() {
  const movies: Movie[]=[
    {
      id:1,
      title:"Iron Man",
      poster:"https://i.blogs.es/7e29c1/ironmanposterint/1366_2000.jpg"
      },
      {
        id:2,
        title:"Iron Man 2",
        poster:"https://movieposters2.com/images/1682646-b.jpg"
        },
        {
          id:3,
          title:"Iron Man 3",
          poster:"https://m.media-amazon.com/images/I/61Wfz2Zd2sL._AC_SL1005_.jpg"
          }
  ];

  return (
    <ListMoviesComponent movies={movies} />
  );
}

export default App;
