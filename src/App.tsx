import React from 'react';
import './App.css';

import {BrowserRouter, Route} from "react-router-dom";

import Product from "./admin/Product";
import Main from "./main/Main";

function App() {
    return (
        <div className="App">

            <BrowserRouter>
                <Route path='/' exact component={Main}/>
                <Route path='/admin/products' component={Product}/>
            </BrowserRouter>

        </div>
    );
}

export default App;
