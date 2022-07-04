import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";

function App() {
    return (
        <div className={'App'}>
            <Header/>
            <Main/>
            <Skills/>
            <Footer/>
        </div>
    );
}

export default App;
