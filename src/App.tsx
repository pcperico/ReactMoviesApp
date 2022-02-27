import './App.css';
import { landingPageDto, Movie } from './Models/Movie.models';
import ListMoviesComponent from './Components/ListMoviesComponent';
import { useEffect, useState } from 'react';

function App() {
  const [movies,setMovies] = useState<landingPageDto>({});

  useEffect(()=>{
      const timerId=setTimeout(()=>{
        setMovies({cinemaListings:[
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
        ],
        comingSoon:[]
      })
      },1000);
      return ()=>clearTimeout(timerId);
  });  
  

  return (
    <>
      <h3>Cinema Listing</h3>
      <br />
      <ListMoviesComponent movies={movies.cinemaListings} />
      <br />
      <br />
      <h3>Coming Soon</h3>
      <br />
      <ListMoviesComponent movies={movies.comingSoon} />
    </>
    
  );
}

export default App;
