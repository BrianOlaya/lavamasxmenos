import React from "react";
import instagram from "../media/Instagram_logo.svg.webp";
import facebook from "../media/facebook_f_logo.svg.webp";
import brian from "../media/logo_brian.svg";
import background from '../media/bluebg.jpg'

function Contact() {
  return (
    <div className=" w-full bg-cover text-blue-900" style={{backgroundImage : `url(${background})` }} id="contact">
      <div className="md:flex pt-8">
        <div className="md:w-1/2 mt-8">
          <h1 className=" text-3xl md:text-5xl font-light md:ml-60 ml-20 mb-4 md:mb-10">Contáctanos</h1>
          <p className=" text-2xl md:text-4xl font-light md:ml-64 ml-24">311 516 7273</p>
          <p className=" text-2xl md:text-4xl font-light md:ml-64 ml-24">324 469 3084</p>
        </div>
        <div className="md:w-1/2 mt-8">
        <h1 className=" text-3xl md:text-5xl font-light md:ml-60 ml-24 mb-4 md:mb-10" >Síguenos</h1>
        <div className="flex justify-center">
         <a href="https://instagram.com/lavamasxmenos/" target="_blank" rel="noopener noreferrer"><img className="md:w-[100px] md:h-[100px] w-[50px] mr-4" src={instagram} alt=""/></a> 
         <a href="https://m.facebook.com/profile.php?id=100064161816516/" target="_blank" rel="noopener noreferrer"><img className="md:w-[100px] md:h-[100px] w-[50px] md:mr-32 " src={facebook} alt=""/></a> 
         </div>
        </div>
      </div>
      <div className="text-center mt-10">
      <p>Medellín, Antioquia - Colombia</p>
      <p> © {new Date().getFullYear()} Todos los derechos reservados.</p>
      </div>
      <div className="bg-cyan-900 flex justify-center items-center h-16">
        <p className="font-light text-white text-xs">Desarrollado por: Brian Olaya Dev </p>     
        <img className="w-5 ml-1" src={brian} alt="" />  
      </div>
    </div>
  );
}

export default Contact;
