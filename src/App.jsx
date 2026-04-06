import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Gallery from './pages/Gallery'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
        <Navbar />
        <main>
            <Router>
                <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/about" element={<Gallery />} />
                        <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </main>
        <Footer />
    </>
  )
}

export default App