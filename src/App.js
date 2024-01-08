import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';

import Layout from './pages/Layout';
import Discover from'./pages/discover';
import Profile from './pages/Profile';
import Login from './pages/Login';
import MoviePage from './pages/MoviePage';
import Register from './pages/Register';
import AddMovie from './pages/AddMovie';
import NotFound from './pages/NotFound';

import React from 'react';


import Button from './components/Button';
import AllMovuesPage from './pages/AllMoviesPage'

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <BrowserRouter>
          <Routes>        
            <Route path="/" element={<Layout/>}>
              <Route index element={<Discover/>}/>
              <Route path='movies' element={<AllMovuesPage/>}/>  
              <Route path='movies/:search' element={<AllMovuesPage/>}/>  
              <Route path='profile' element={<Profile/>}/>
              <Route path='signin' element={<Login/>}/>
              <Route path='signup' element={<Register/>}/>
              <Route path='details/:id' element={<MoviePage/>}/>
              <Route path='add' element={<AddMovie/>}/>
              <Route path='*' element={<NotFound />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
