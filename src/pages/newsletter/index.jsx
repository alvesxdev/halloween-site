import React from "react";
import './NewsLetter.css'
import './media-newsletter.css'
import ImgNewsLetter from '../../assets/happy-halloween.png'

export default () => {
    return (
        <section className="section--newsletter" id="Newsletter">
            <div className="content--newsletter">
                <h1 className="h1--newsletter">our ricked newsletter</h1>
                <form>
                    <div className="fields">
                        <input type="text" name="name" id="name" placeholder="Name" required/>
                    </div>
                    <div className="fields">
                        <input type="email" name="email" id="email" placeholder="Email" required/>
                    </div>
            

                    <div className="btn--newsletter">
                        <input type="button" value='Enviar' name="enviar" />
                    </div>
                </form>

                <div className="img--newsletter">
                    <img src={ImgNewsLetter} alt="" />
                </div>
            </div>
        </section>
    )
}