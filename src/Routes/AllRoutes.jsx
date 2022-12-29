import React from 'react';
import{Routes, Route} from "react-router-dom";
import Home from '../Components/Home';
import Login from '../Components/Login';
import Singin from '../Components/singin';

const AllRoures = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Singin/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
    );
}

export default AllRoures;
