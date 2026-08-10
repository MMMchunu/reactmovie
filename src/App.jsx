import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './css/App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import {MovieProvider} from './contexts/MovieContext'
import Favourite from './pages/Favourite'
import NavBar from './components/NavBar'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  
  return (
    <ThemeProvider>
      <MovieProvider>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/favourite" element={<Favourite />}/>
          </Routes>
        </main>
      </MovieProvider> 
    </ThemeProvider>
  );
}

export default App;
