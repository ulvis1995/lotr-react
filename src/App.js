import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Books from './components/Books/Books';
import Heroes from "./components/Heroes/Heroes";
import Movie from "./components/Movie/Movie";
import MenuComponent from './components/menu.component';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<MenuComponent />} exact/>
          <Route path='/books' element={<Books />} exact/>
          <Route path='/heroes' element={<Heroes />} exact/>
          <Route path='/movie' element={<Movie />} exact/> 
        </Routes>
    </div>
  );
}

export default App;
