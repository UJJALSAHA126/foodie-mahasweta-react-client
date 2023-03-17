import React from 'react'
import "../css/contactme.css"
import { motion } from 'framer-motion'
import { initial, animate, exit } from '../../constants/PageTransitionProperties';

function ContactMe() {
    return (
        <>
            <motion.div className="contact-me-background page-container"
                initial={initial}
                animate={animate}
                exit={exit}>

                <div className="contact-form-container">
                    
                </div>
            </motion.div>
        </>
    )
}

export default ContactMe