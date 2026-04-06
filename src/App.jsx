import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Gallery from './pages/Gallery'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useState } from 'react'

const App = () => {
  const [theme, setTheme] = useState('dark')
  useEffect(() => {
    document.getElementById('body').className = `${theme} theme`
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
    <main>
        <Router>
            <Navbar theme={theme} toggleTheme={toggleTheme}/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            <Footer />
        </Router>
    </main>
    </>
  )
}

export default App