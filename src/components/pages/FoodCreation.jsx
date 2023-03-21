import React, { useState } from 'react'
import "../css/foodcreation.css"
import { motion } from 'framer-motion'
import { initial, animate, exit } from '../../constants/PageTransitionProperties';
import PhotosContent from '../PhotosContent';
import VideoContent from '../VideoContent';
import ReelContent from '../ReelContent';

function FoodCreation() {

  const [currTab, setCurrTab] = useState('photos')

  const tabCanged = (e, name) => {
    setCurrTab(name);
  }

  const isActive = (name) => {
    return (currTab === name) ? "active" : ""
  }

  const switchComponent = (currTab) => {
    if (currTab === 'photos') return <PhotosContent />
    if (currTab === 'videos') return <VideoContent />
    if (currTab === 'reels') return <ReelContent />
  }

  return (
    <motion.div className='food-creation-background page-container'
      initial={initial}
      animate={animate}
      exit={exit}>

      <div className="upper-tabs">
        <span className={isActive('photos')} onClick={(e) => tabCanged(e, 'photos')} name='photos'>Photos</span>
        <span className={isActive('videos')} onClick={(e) => tabCanged(e, 'videos')} name='videos'>Videos</span>
        <span className={isActive('reels')} onClick={(e) => tabCanged(e, 'reels')} name='reels'>Reels</span>
      </div>

      <div className="lower-content-section">
        {switchComponent(currTab)}
      </div>


    </motion.div>
  )
}

export default FoodCreation