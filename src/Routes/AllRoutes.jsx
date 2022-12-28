import React from 'react';
import{Routes, Route} from "react-router-dom";
import Login from '../Components/Login';
import Singin from '../Components/singin';

const AllRoures = () => {
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/sing' element={<Singin/>}/>
        </Routes>
    );
}

export default AllRoures;
