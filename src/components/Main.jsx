//import video from "../media/lavadora.mp4";
import lavadora_mabe from "../media/lavadora_mabe.svg";
//import lavadora_challenger from "../media/lavadora_challenger.webp";
import background from '../media/bluebg.jpg'
import lavadora_challenger_2 from "../media/lavadora_chalenger.svg";
import whatsApp_icon from '../media/whatsApp_icon.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Main() {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "transparent" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "transparent" }}
        onClick={onClick}
      />
    );
  }
  
  const msg = "Saludos, quisiera contratar un plan con ustedes por favor."

  const settings = {
    //dots: true,
    fade: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
 
  // bg-gradient-to-r 
  // from-cyan-200 from-10% 
  // via-teal-100 via-50% 
  // to-slate-50 to-100% 
  // md:bg-gradient-to-r  
  // from-cyan-500 
  // to-white 
  // md:bg-gradient-to-r from-slate-200 to-white
  return (
    <>
    <div className=" flex md:flex-row flex-col  w-full bg-cover" style={{backgroundImage : `url(${background})` }} id=' main'>
      <div className="md:w-1/2 text-center md:text-right md:pl-20 mt-20 md:mt-40 font-light ">
          <h1 className="px-6 md:text-6xl text-xl mb-[-40px] text-blue-900">Alquiler de lavadoras automáticas y doble tina. Ofrecemos el mejor servicio de la ciudad al mejor precio. Contáctanos.</h1>
      </div>

      <div className="md:w-2/5 w-11/12">

      <Slider {...settings}>
          <div>
            <img className="md:w-3/4 w-60 ml-10 mt-8 md:mt-16 md:ml-36 pointer-events-none" src={lavadora_mabe} alt=""/>
          </div>
          <div>
            <img className="md:ml-8 w-full ml-2 pointer-events-none" alt="" src={lavadora_challenger_2} />
          </div>
        </Slider>
      </div>  
    </div>


    
    <a className="hidden absolute md:flex  left-[490px] bottom-20 bg-green-600 rounded-full text-white px-8 py-4 text-3xl"  href={`https://wa.me/573023704235/?text=${msg}`} target="_blank" rel="noopener noreferrer"> Contactar
    <img className="w-10 ml-2" src={whatsApp_icon} alt="" />
    </a>


    <a className="md:hidden fixed bottom-8 right-2 w-14 ml-2"  href={`https://wa.me/573023704235/?text=${msg}`} target="_blank" rel="noopener noreferrer"><img className="md:hidden fixed bottom-8 right-2 w-14 ml-2" src={whatsApp_icon} alt="" /></a>
  
    </>
  );
}

export default Main;

