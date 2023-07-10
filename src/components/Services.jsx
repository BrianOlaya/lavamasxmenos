import React from "react";
import lavadora from "../media/png_lavadora.png";
import pin from '../media/location-pin.png'
import background from "../media/bluebg.jpg";
import { Link } from "react-scroll";
import whatsApp_icon from "../media/whatsApp_icon.png";

function Services() {
  const msg1 = "Saludos, quisiera contratar el plan *5 horas* por favor.";
  const msg2 = "Saludos, quisiera contratar el plan *mixto A* por favor.";
  const msg3 = "Saludos, quisiera contratar el plan *mixto B* por favor.";
  const msg4 = "Saludos, quisiera contratar el plan *24 horas* por favor.";

  return (
    <div
      className="w-full bg-cover py-6 text-blue-900"
      style={{ backgroundImage: `url(${background})` }}
      id="service"
    >
      <div>
        <h1 className="text-4xl  text-center py-4">Nuestros planes</h1>
        <p className="text-center text-sm md:text-lg pb-2 px-2">
          Antes de solcitar algún plan te recomendamos que revises los términos
          y condiciones del servicio.{" "}
          <Link
            className="cursor-pointer text-sm font-semibold md:text-lg"
            to="terms"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            Clic aquí
          </Link>{" "}
        </p>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        <div className="w-full md:w-[360px] px-3">
          <div className="rounded-md shadow-md  backdrop-blur-sm bg-white/30 w-full  h-[500px] px-2">
            <p className=" text-center pt-2 text-3xl ">Plan 5 horas</p>
            <p className=" text-center pt-2 text-xl ">
              (Plan disponible únicamente hasta las 10 am)
            </p>
            <img src={lavadora} className="w-60 mx-auto my-2 " alt="lavadora" />
            <p className=" text-center pt-2 text-2xl ">$20.000</p>
            <a
              className="flex w-full justify-center rounded-full bg-green-600 py-2"
              href={`https://wa.me/573115167273/?text=${msg1}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <p className="text-xl text-white">Solicitar este plan</p>
              <img className=" w-8 ml-2" src={whatsApp_icon} alt="" />
            </a>
          </div>
        </div>

        <div className="w-full md:w-[360px] px-3 ">
          <div className="rounded-md  shadow-md  backdrop-blur-sm  bg-white/30 w-full  h-[500px] px-2">
            <p className=" text-center pt-2 text-3xl ">Plan mixto A</p>
            <p className=" text-center pt-2 text-xl ">
              ( Desde las 2p.m. hasta las 8:30am del otro día.)
            </p>
            <img src={lavadora} className="w-60 mx-auto my-2 " alt="lavadora" />
            <p className=" text-center pt-2 text-2xl ">$28.000</p>
            <a
              className="flex w-full justify-center rounded-full bg-green-600 py-2"
              href={`https://wa.me/573115167273/?text=${msg2}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <p className="text-xl text-white">Solicitar este plan</p>
              <img className=" w-8 ml-2" src={whatsApp_icon} alt="" />
            </a>
          </div>
        </div>

        <div className="w-full md:w-[360px]  px-3">
          <div className="rounded-md  shadow-md  backdrop-blur-sm  bg-white/30 w-full  h-[500px] px-2">
            <p className=" text-center pt-2 text-3xl ">Plan mixto B</p>
            <p className=" text-center pt-2 text-xl ">
              (Desde las 5p.m. hasta las 8:30am del otro día.)
            </p>
            <img src={lavadora} className="w-60 mx-auto my-2 " alt="lavadora" />
            <p className=" text-center pt-2 text-2xl ">$25.000</p>
            <a
              className="flex w-full justify-center rounded-full bg-green-600 py-2"
              href={`https://wa.me/573115167273/?text=${msg3}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <p className="text-xl text-white">Solicitar este plan</p>
              <img className=" w-8 ml-2" src={whatsApp_icon} alt="" />
            </a>
          </div>
        </div>

        <div className="w-full md:w-[360px]  px-3">
          <div className="rounded-md  shadow-md  backdrop-blur-sm bg-white/30 w-full  h-[500px] px-2">
            <p className=" text-center pt-2 text-3xl ">Plan 24 horas</p>
            <p className=" text-center pt-2 text-xl ">
              (Zonas lejanas de más de 28min 38mil pesos)
            </p>
            <img src={lavadora} className="w-60 mx-auto my-2 " alt="lavadora" />
            <p className=" text-center pt-2 text-2xl ">$35.000</p>
            <a
              className="flex w-full justify-center rounded-full bg-green-600 py-2"
              href={`https://wa.me/573115167273/?text=${msg4}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <p className="text-xl text-white">Solicitar este plan</p>
              <img className=" w-8 ml-2" src={whatsApp_icon} alt="" />
            </a>
          </div>
        </div>
      </div>
      <h1 className="text-center my-4 text-4xl">Nuestra cobertura</h1>
      <div className="flex flex-wrap gap-4 justify-center text-4xl font-light">
        <div className="w-full  px-3">
          <div className="rounded-md  shadow-md  backdrop-blur-sm bg-white/30 w-full p-4 md:flex">
            <div className="md:w-1/2">
              <p className=" text-center pt-2">Itagüí</p>
              <p className=" text-center pt-2">San Pío</p>
              <p className=" text-center pt-2">Calatrava</p>
              <p className=" text-center pt-2"> Cristo Rey</p>
              <p className=" text-center pt-2">San Antonio de Prado</p>
              <p className=" text-center pt-2">La Estrella</p>
              <p className=" text-center pt-2">Sabaneta</p>
              <p className=" text-center pt-2">Envigado</p>
              <p className=" text-center pt-2">Poblado</p>
              <p className=" text-center pt-2">Belén</p>
              <p className=" text-center pt-2">Laureles</p>
            </div>
            <div className="md:w-1/2">
              <img src={pin} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
