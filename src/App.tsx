import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";
import {Projects} from "./components/projects/Projects";
// import {Hire} from "./components/hire/Hire";
import {Contacts} from "./components/contacts/Contacts";
import {ArrowUpButton} from "./components/upButton/ArrowUpButton";

function App() {
    return (
        <div className={'App'}>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            {/*<Hire/>*/}
            <Contacts/>
            <Footer/>
            <ArrowUpButton/>
        </div>
    );
}

export default App;
