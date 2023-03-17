import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import FoodCreation from './pages/FoodCreation'
import Home from './pages/Home'
import ContactMe from './pages/ContactMe'
import { AnimatePresence } from 'framer-motion'


function AnimatedRoutesForPages() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/food-creation" element={<FoodCreation />} />
                <Route path="/contact-me" element={<ContactMe />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutesForPages