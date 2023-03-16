import React from 'react'
import memImg from "../../resources/images/mem_photos/mem_img15.png";
import "../css/home.css"

function Home() {
    return (
        <div id="about_me_section" className="about-owner-container">
            <div className="top">
                <div className="name-about">
                    <span className="full-name">
                        <span className="first">Mahasweta</span>
                        <span className="second">Ghatak</span>
                    </span>
                    <span className="nick-name">(Mem)</span>
                </div>
            </div>

            <div className="bottom">
                <div className="owner-image">
                    <img src={memImg} />
                </div>

                <div className="about-owner">
                    <span>Hello everyone, I am <b style={{ color: "rgb(254, 203, 84)" }}>Mahasweta Ghatak</b>. Most of you know me as <b style={{ display: "inline" }}>Foodie Mahasweta</b>. Today is my birthday 🎂. I am so happy and thankful for all the love and support that you show to my content ♥.
                        I shall try my best to give you more yummy recepies in the future. </span>
                </div>
            </div>

        </div >
    )
}

export default Home