import React from "react";
import './Services.css'
import './media-services.css'
import Cards from '../../components/cards'

export default () => {
    return (
        <section className="section--services" id="Services">
            <div className="content--services">
            <h1 className="h1--services">Services</h1>
            <div className="content--cards">
                <Cards />
                <Cards />
                <Cards />
            </div>
            </div>
        </section>
    )
}