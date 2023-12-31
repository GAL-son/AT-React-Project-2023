import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';

import Layout from './pages/Layout';
import Discover from'./pages/discover';
import Profile from './pages/Profile';
import Login from './pages/Login';
import MoviePage from './pages/MoviePage';
import Register from './pages/Register';
import AddMovie from './pages/AddMovie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>        
        <Route path="/" element={<Layout/>}>
          <Route index element={<Discover/>}/>
          <Route path='movies' element={<App/>}/>  
          <Route path='profile' element={<Profile/>}/>
          <Route path='signin' element={<Login/>}/>
          <Route path='signup' element={<Register/>}/>
          <Route path='details' element={<MoviePage/>}/>
          <Route path='add' element={<AddMovie/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
