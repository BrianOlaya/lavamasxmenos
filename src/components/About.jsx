import React from "react";
import laundry from "../media/House-Laundry.svg";

function About() {
  return (
    <div className="bg-blue-800 pb-4" id="about">
      <div className="p-4 md:flex md:flex-row-reverse">
        <p className=" text-white md:text-5xl  text-xl mt-8 md:my-40 md:px-8 text-center px-2">
          Somos una empresa especiliazada en servicios de alquiler de lavadoras.
          Llevamos nuestra atención hasta la comodidad de tu hogar.
        </p>
        <img className="md:w-2/5" src={laundry} alt="" />
      </div>
      <div className="md:flex p-3 text-white ">
        <div className="md:w-1/2 p-4 rounded-md border-solid border-cyan-300 border-2 shadow-md shadow-cyan-500/50 m-3">
          <h1 className="text-center pb-2 text-xl md:text-2xl">Misión</h1>
          <p className=" text-justify md:text-2xl md:font-light md:pt-2">
            Nuestra misión es proporcionar un servicio de alquiler de lavadoras
            con la más alta calidad, ofreciendo soluciones convenientes y
            accesibles para satisfacer las necesidades de nuestros clientes.
            Buscamos facilitarles la vida a través de un servicio confiable y
            eficiente, asegurando que tengan siempre acceso a equipos modernos y
            en perfecto estado, respaldados por un excelente servicio al
            cliente.
          </p>
        </div>
        <div className="md:w-1/2 p-4 rounded-md border-solid border-cyan-300 border-2  shadow-md shadow-cyan-500/50 m-3">
          <h1 className="text-center  pb-2 text-xl md:text-2xl">Visión</h1>
          <p className=" text-justify md:text-2xl md:font-light">
            Nos visualizamos como líderes en el sector de alquiler de lavadoras,
            reconocidos por nuestra calidad y compromiso con la satisfacción del
            cliente. Buscamos ser la opción preferida para aquellos que
            necesiten una solución temporal o a largo plazo para el lavado de su
            ropa, brindando un servicio impecable que genere confianza y
            fidelidad. Aspiramos a expandir nuestra presencia a nivel nacional
            ofreciendo a más personas la comodidad y conveniencia de nuestro
            servicio de alquiler de lavadoras.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
