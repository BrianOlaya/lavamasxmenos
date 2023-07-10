import background2 from "../media/lavadora-mabe-tapa-abierta.jpg";
import logo_challenger_2 from "../media/logo-challenger3.webp";
import logo_mabe_2 from "../media/logo_mabe.png";

function Main() {
  return (
    <>
      <div
        className="w-full h-screen bg-cover md:bg-center"
        style={{ backgroundImage: `url(${background2})` }}
      >
        <div className="blur-lg bg-white/60 w-3/4 md:w-full h-full"></div>
        <h1 className="absolute z-0 top-32 w-1/2  text-5xl md:w-3/4  md:text-7xl md:top-40 md:left-56 md:text-center   ml-4 text-blue-800 font-light md:font-bold drop-shadow-lg shadow-black ">
          Alquiler de lavadoras automáticas y doble tina
        </h1>
        <img
          className="absolute left-4 bottom-4  w-36  md:left-[20%] md:bottom-40 md:w-80"
          src={logo_mabe_2}
          alt=""
        />
        <img
          className="absolute left-44 bottom-5  w-40  md:left-[60%] md:bottom-40 md:w-[400px]"
          src={logo_challenger_2}
          alt=""
        />
      </div>
    </>
  );
}

export default Main;
