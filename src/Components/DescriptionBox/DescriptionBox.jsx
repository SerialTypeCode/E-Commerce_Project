import React from "react"
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box-fade">Review</div>
            </div>
            <div className="descriptionbox-description">
            <p>An e-commerce website, or online store, is a platform that
               allows people to buy and sell products and services over the 
               internet. E-commerce websites can be accessed from anywhere 
               with an internet connection, unlike physical storefronts. </p>
               <p></p>
            </div>
        </div>
    )
}

export default DescriptionBox