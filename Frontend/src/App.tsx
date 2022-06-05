import React from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import { FormLibro } from './Components/FormLibro';
import { ListaLibri } from './Components/ListaLibri';
import { Route, Routes } from 'react-router-dom'
import { NavBar } from './Components/NavBar';
import './App.css';
import { logout } from './actions/logout';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { LoginComponent } from './Components/LoginComponent';

function App() {
  const isLogged = useSelector((state: {isLogged: boolean}) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <>
    <NavBar></NavBar>
    <div className="App container">
    {isLogged ? (
      <Routes> 
        {/* ROUTE PERMETTE DI IMPOSTARE IL SEGMENTO CHE RENDIZZERA UN DETERMINATO COMPONENTE*/}
        {/* CONTROLLA COMPONENTE NavBar PER VEDERE DOVE E' STATO IMPOSTATO IL PATH DI OGNI PAGINA */}
        <Route path="/" element={<FormLibro/>}/> 
        <Route path="/form" element={<FormLibro/>}/>
        <Route path="/lista-card" element={<ListaLibri/>}/>
      </Routes>) : (<LoginComponent />)}
    </div>
    </>
  );
}

export default App;