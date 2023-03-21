import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './css/content.css'

function PhotosContent() {
    return (
        <div className='content-container'>

            <LazyLoadImage className='photo-item content-item'
                src='https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format'
            />

        </div>
    )
}

export default PhotosContent