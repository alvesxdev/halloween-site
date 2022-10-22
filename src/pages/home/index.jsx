import React from "react";
import ImgAboboraMain from '../../assets/img-main-abobora.png'
import './Home.css'
import './media-home.css'


export default () => {
    return (
        <section className="section--main" id="Home">
            <div className="content-main">
                <div className="content-text--main">
                    <h1>Halloween</h1>
                    <h2>Party</h2>
                    <p>Halloween or Hallowe’en(a contraction of all Hallow’s<br/> Evening also know as Allhaloween, All Hallow’s Eve or<br/>All mSaints’Eve is a celebration observed in a number<br/> of countries on 31 October.</p>
                    <div className="btn--main">
                        <a href="">Explore More</a>
                    </div>
                </div>
                <div className="content-img--main">
                    <img src={ImgAboboraMain} alt="" />
                </div>
            </div>
        </section>
    )
}