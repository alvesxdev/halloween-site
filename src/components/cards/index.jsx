import React from "react";
import './Cards.css'
import ImgCard2 from '../../assets/img-card2.png'

export default () => {
    return(
        <div className="card">
            <div className="img--card">
                <img src={ImgCard2} alt="" />
            </div>
            <div className="text--card">
                <h1 className="h1--card">Services</h1>
                <p>Descrição do serviço</p>
                <ul className="ul--card">
                    <li>Serviço 1</li>
                    <li>Serviço 2</li>
                    <li>Serviço 3</li>
                </ul>
            </div>
            <div className="btn--card">
                <a href="">Saiba mais</a>
            </div>
        </div>
    )
}