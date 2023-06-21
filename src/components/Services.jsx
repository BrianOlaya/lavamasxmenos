import React from "react";
import money from '../media/save_money.svg'
import location from '../media/location.svg'
import background from '../media/bluebg.jpg'

function Services() {
  return (
    <div className="w-full bg-cover"style={{backgroundImage : `url(${background})` }} id="service">
      <div className="md:flex w-full text-2xl font-light md:text-5xl  md:pt-48 ">
        <div className="md:w-1/2 text-center text-blue-900 pt-12 md:pt-8">
          <p className="md:my-4 mb-1 font-bold">Planes:</p>
          <p>5 horas: $20.000</p>
          <p>Mixto A: $28.000</p>
          <p>Mixto B: $25.000</p>
          <p>24 horas: $35.000</p>
          <img className=" w-1/2  md:relative md:w-[270px] md:top-[-280px] md:left-[570px] " src={money} alt="" />
        </div>
        <div className="md:w-1/2 text-center text-blue-900 pt-4 pb-8 md:pt-1 md:pb-1">
        <p className="md:mt-4 mb-1 font-bold">Cobertura:</p>
        <div className="md:flex">
        <div className="md:w-1/2 text-center">
          <ul>
            <li>Itagüí</li>
            <li>San Pío</li>
            <li>Calatrava</li>
            <li>Cristo Rey</li>
            <li>San Antonio de Prado</li>  
          </ul>
        </div>
        <div className="md:w-1/2 text-center">
          <ul>
            <li>La Estrella</li> 
            <li>Sabaneta</li>
            <li>Envigado</li>
            <li>Poblado</li>
            <li>Belén</li>
            <li>Laureles</li>         
          </ul>
        </div>
        </div>
        <img className=" w-1/2 md:w-2/5 md:hidden ml-40 md:ml-[-220px] md:top-[-60px] z-[-1]" src={location} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Services;
