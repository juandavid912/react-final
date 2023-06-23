import React from 'react';
import './main2.css'

function main4(props) {
    return (
        <>
            <div class="col-3 bg-white mx-5 p-5 box ultima">
                <h5>
                    {props.titulo}
                </h5>

                <p>
                    {props.texto}
                </p>

          

            {props.jugar ?    <button className='align-bottom boton-inf'>{props.jugar}</button>   : null/*           <button>{props.jugar}</button> */}
            </div>
        </>
    );
};

export default main4;


/* import React from 'react';
import './main2.css'

function main4(props) {
    return (
        <>
            <section class="GroundWater-Troll bg-img " id="GroundWater">
                <h2>
                    <img class="my-5" src="./src/assets/IMG/Logo-videojuego.png" alt="" srcset="" />
                </h2>
                <div class="row container mt-5">
                    <div class="col-3 bg-white mx-5 p-5 box ultima">
                        <h5>
                            ¿Qué es?
                        </h5>

                        <p>
                            GroundWater Troll es un juego web en dónde te encuentras en una aventura sobre las aguas
                            subterráneas y aprendemos sobre ellas y cómo afecta al medio ambiente.
                        </p>

                    </div>
                    <div class="col-3 bg-white mx-5 p-5 box ultima">
                        <h5>
                            ¿Por qué Jugar?
                        </h5>

                        <p>
                            Conviértete en un explorador y contribuye al cuidado de las aguas subterráneas.
                        </p>

                        <a class="align-bottom boton-inf" href="./Juego-web.html">
                            Jugar
                        </a>
                    </div>
                    <div class="col-3 bg-white mx-5 p-5 box ultima">
                        <h5>
                            Actualizaciones
                        </h5>

                        <p>
                            Tenemos varias formas de juego para que te diviertas.
                        </p>

                    </div>
                </div>
            </section>
        </>
    );
};

export default main4; */