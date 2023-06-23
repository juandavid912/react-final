
import './App.css'
import Main2 from "./main2.jsx"
import Main3 from "./main3.jsx"
import Main4 from "./main4.jsx"

function App() {

  return (
    <>
      <Main2 />

      <Main3
        texto1="Cuidemos las aguas subterráneas, ya que ellas cuidan el ecosistema."
        imagen1="../src/assets/IMG/Slider1.png"

        texto2="Demos atención a los lagos, manantiales y ríos, ya que ellos se conectan con las aguas subterráneas"
        imagen2="../src/assets/IMG/Slider2.png"

        texto3="Creemos en la transformación de las depuradoras en fábricas de agua.  -CoralRobles."
        imagen3="../src/assets/IMG/Slider3.png"

        texto4="El reto de poder controlar lo que desechamos es tener una conciencia más razonable"
        imagen4="../src/assets/IMG/Slider4.png"
      />


      {/* GROUNDWATER CARTAS */}


      <section class="GroundWater-Troll bg-img " id="GroundWater">
        <h2>
          <img class="my-5" src="./src/assets/IMG/Logo-videojuego.png" alt="" srcset="" />
        </h2>

        <div class="row container mt-5">
          <Main4

            titulo="¿Qué es?"

            texto="GroundWater Troll es un juego web en dónde te encuentras en una aventura sobre las aguas subterráneas y aprendemos sobre ellas y cómo afecta al medio ambiente."

          />

          <Main4

            titulo="¿Por qué Jugar?"

            texto="Conviértete en un explorador y contribuye al cuidado de las aguas subterráneas."

            jugar = "jugar"
          />

          <Main4

            titulo="Actualizaciones"

            texto="Tenemos varias formas de juego para que te diviertas."

          />
        </div>
      </section>






    </>
  )
}

export default App
