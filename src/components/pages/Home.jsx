import React from 'react'
import memImg from "../../resources/images/mem_photos/mem_img15.png";
import "../css/home.css"
import { motion } from 'framer-motion';
import { initial, animate, exit } from '../../constants/PageTransitionProperties';

function Home() {
    return (
        <motion.div id="about_me_section" className="about-owner-container page-container"

            initial={initial}
            animate={animate}
            exit={exit}

        >
            <div className="top">
                <div className="name-about">
                    <span className="full-name">
                        <span className="first">Mahasweta</span>
                        &nbsp;
                        <span className="second">Ghatak</span>
                    </span>
                    <span className="nick-name">(Mem)</span>
                </div>
            </div>

            <div className="bottom">
                <div className="owner-image">
                    <img src={memImg} alt='' />
                </div>

                <div className="about-owner">
                    <span>Hello everyone, I am <b style={{ color: "rgb(254, 203, 84)" }}>Mahasweta Ghatak</b>. Most of you know me as <b style={{ display: "inline" }}>Foodie Mahasweta</b>. Today is my birthday 🎂. I am so happy and thankful for all the love and support that you show to my content ♥.
                        I shall try my best to give you more yummy recepies in the future. </span>
                </div>
            </div>

        </motion.div >
    )
}

export default Home