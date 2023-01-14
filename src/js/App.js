/*
This is some dummy react app 
feel free to include which or build which ever you want
*/

import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Login } from './Pages/login';
import { Setup } from './Pages/setup';

function App() {
    return (
        <div>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/setupaccount' element={<Setup />} />
                </Routes>
            </HashRouter>
        </div>
    )
}

export default App;