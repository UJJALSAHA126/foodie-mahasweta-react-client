import React, { useEffect, useState } from 'react'
import "../css/foodcreation.css"
import { motion } from 'framer-motion'
import { initial, animate, exit } from '../../constants/PageTransitionProperties';
import TestImage from '../demo/TestImage';
import { datas } from '../demo/data.js';

function FoodCreation() {

  const [images, setImages] = useState([]);
  let count = 1;

  const addImages = () => {
    const newImages = [];
    console.log('count', count++);

    // datas.foreach((data) => {
    //   console.log(datas.length);
    // })

    // console.log('len',datas.length);

    for (let i = 0; i < datas.length; i++) {
      const data = datas[i];
      const url = data.urls.regular;
      newImages.push(url);
      newImages.push(data.urls.full);
    }

    // console.log('datas', datas);

    setImages((prev) => [...prev, ...newImages]);
  }

  useEffect(() => {
    addImages();
  }, [])


  return (
    <motion.div className='food-creation-background page-container'
      initial={initial}
      animate={animate}
      exit={exit}>

      {/* <img className='test-img' src='https://ik.imagekit.io/hbl5agpen/testing/HappyBirthday.png?updatedAt=1679199230928'></img> */}

      {/* <img className='test-img' src='https://ik.imagekit.io/hbl5agpen/testing/IMG_20210419_130648.jpg?updatedAt=1679200267346'></img> */}

      {(images && images.length > 0) &&
        images.map((url, num) => {
          return <TestImage key={num} url={url} num={num} />
        })}

    </motion.div>
  )
}

export default FoodCreation