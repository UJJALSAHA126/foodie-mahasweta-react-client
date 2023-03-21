import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

function PhotoItem(props) {
    return (
        <div className="content-item">

            <LazyLoadImage className='photo-item blur'
                // src='https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format'

                // src='https://picsum.photos/500?random=1'
                src={props.url}
            />

            <div className="content-hover">
                Hello Mummum
            </div>
        </div>
    )
}

export default PhotoItem