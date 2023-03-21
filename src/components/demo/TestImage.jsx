import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

function TestImage(props) {
    return (
        <div>
            <div className='test-img-num'>{props.num}</div>
            {/* <img className='test-img' src={props.url}></img> */}

            <LazyLoadImage className='test-img' 
            src={props.url}
            effect="blur"
            />

        </div>
    )
}

export default TestImage