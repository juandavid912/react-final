import React from 'react';
import './main2.css'

function main3(props) {
  return (
    <>
     <div class="mt-7">
            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1">
                    </button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2">
                    </button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3">
                    </button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                        aria-label="Slide 4">
                    </button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={props.imagen1} class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block ">
                            <p class="text-black fs-4">{props.texto1}</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src= {props.imagen2} class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block ">
                            <p class="text-white fs-4">{props.texto2} </p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src= {props.imagen3} class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block ">
                            <p class="text-white fs-4">{props.texto3} </p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src= {props.imagen4} class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block ">
                            <p class="text-white fs-4"> {props.texto4} </p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </>
  );
};

export default main3; 
