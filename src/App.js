import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import AnimatedRoutesForPages from './components/AnimatedRoutesForPages'

function App() {
  return (
    <>
      <Router>

        <Navbar />
        <AnimatedRoutesForPages />

      </Router>
    </>
  )
}

export default App