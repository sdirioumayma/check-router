import './App.css';
import React from  'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import Trailer from './components/Trailer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter style={{textalign: "center"}}>
    <div>
    <Routes>
    <Route path='/' element={ <MovieList/>} />
     <Route path='/trailer/:id' element={ <Trailer/>} />
     </Routes>
    </div>
    </BrowserRouter>
  );
}


export default App;
