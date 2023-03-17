import React from 'react'
import "../css/contactme.css"
import { motion } from 'framer-motion'
import { initial, animate, exit } from '../../constants/PageTransitionProperties';
import { useForm, /*ValidationError*/ } from '@formspree/react';

function ContactMe() {

    const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_API_KEY);

    if (state.succeeded) {
        alert("Success Fully Submitted !!");
    }

    return (
        <motion.div className="contact-me-background page-container"
            initial={initial}
            animate={animate}
            exit={exit}>

            <div className="contact-form-container">

                <form className='contact-form' onSubmit={handleSubmit}>
                    <div className="form-name">
                        <input
                            id="first-name" type="text" name="first-name" placeholder='Your first name'
                        />
                        <input
                            id="second-name" type="text" name="second-name" placeholder='Your second name'
                        />
                    </div>

                    <input
                        id="email" type="email" name="email" placeholder='Your email'
                    />

                    <textarea
                        id="message" name="message" placeholder='Enter your message here' rows="10"
                    />

                    <button type="submit" disabled={state.submitting}>
                        Submit
                    </button>
                </form>
            </div>
        </motion.div>
    )
}

export default ContactMe