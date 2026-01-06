import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';

const App = () => {
    return (
        <div className='min-h-screen bg-black'>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Hero></Hero>
                <About></About>
            </main>
        </div>
    );
};

export default App;