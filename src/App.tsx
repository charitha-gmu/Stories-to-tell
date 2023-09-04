import React from 'react';
import './App.css';
import './_global.scss';
import AppRoutes from 'routes';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';
import Theme from 'resources/theme';

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={Theme}>
                <BrowserRouter>
                    <AppRoutes />
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;
