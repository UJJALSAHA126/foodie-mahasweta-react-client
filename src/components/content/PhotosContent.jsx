import React, { useEffect, useState } from 'react'
import '../css/content.css'
import PhotoItem from './PhotoItem'

function PhotosContent() {
    let isLoaded = false;
    const [allImages, setAllImages] = useState([]);

    const addImages = () => {
        const newImages = [];
        isLoaded = true;

        for (let i = 0; i < 10; i++) {
            newImages.push('https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format');
        }

        setAllImages((prev) => [...prev, ...newImages]);
    }

    const handleInfiniteScroll = () => {
        console.log('scroll');
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
            addImages();
        }
    }

    useEffect(() => {
        console.log('Loaded');
        // setAllImages(getImages());
        if (isLoaded) return;

        addImages();
        window.addEventListener('scroll', handleInfiniteScroll);

        // return () => window.removeEventListener('scroll', handleInfiniteScroll);
    }, [])




    return (
        <div className='content-container'>

            {allImages.map((url, ind) => {
                return <PhotoItem url={url} key={ind} />
            })}

        </div>
    )
}

export default PhotosContent