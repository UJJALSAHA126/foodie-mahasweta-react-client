import React from 'react'
import "../css/foodcreation.css"
import { motion } from 'framer-motion'
import { initial, animate, exit } from '../../constants/PageTransitionProperties';

function FoodCreation() {
  return (
    <motion.div className='food-creation-background page-container'
      initial={initial}
      animate={animate}
      exit={exit}

    >
      FoodCreation
    </motion.div>
  )
}

export default FoodCreation