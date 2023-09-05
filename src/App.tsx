import React from 'react';
import './App.css';
import './_global.scss';
import AppRoutes from 'routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <div className="App">
                <BrowserRouter>
                    <AppRoutes />
                </BrowserRouter>
        </div>
    );
}

export default App;
