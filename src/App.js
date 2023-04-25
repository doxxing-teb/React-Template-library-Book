import logo from './logo.svg';
import './App.css';
import './skeleton.css';
import './normalize.css';
import Navigation from './Components/Navigation';
import Aside from './Components/Aside';
import Content from './Components/Content';
import React, { useRef, useEffect } from "react";
import { ReactDOM } from 'react';
import Library from './Components/Library';
import About from './Components/About';
import Pay from './Pay/Pay';
import './Responsive.css';
import './Animations.css'
import Contact from './Components/Contact';

function App() {
    return (
        <div className='App'>
            <Navigation />
            <Content />
            <Library />
            <About />
            <Contact />
            <Aside />
        </div>
    );
}

export default App;