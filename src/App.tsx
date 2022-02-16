import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './Components/HelloWorld';
import MovieComponent from './Components/MovieComponent';
import { Movie } from './Models/Movie.models';

function App() {
const movieTest:Movie={
id:1,
title:"Iron Man",
poster:"https://i.blogs.es/7e29c1/ironmanposterint/1366_2000.jpg"
}

  return (
    <MovieComponent movie={movieTest} />
  );
}

export default App;
