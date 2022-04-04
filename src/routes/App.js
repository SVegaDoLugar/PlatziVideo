import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Player from '../containers/Player';

//Se puede omitir el return, pasando directamente a él y no encapsular entre
    //corchetes sino entre paréntesis
const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path='/player/:id' element={<Player/>}/>
        </Routes>
    </BrowserRouter>
);

export default App;