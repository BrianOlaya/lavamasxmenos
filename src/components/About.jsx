import React from 'react'
import laundry from '../media/House-Laundry.svg'

function About() {
  return (
    <div className=' p-4 md:flex md:flex-row-reverse' style={{backgroundColor:`#00e1ff`}}  id='about' >
      <p className=' text-blue-900 md:text-5xl font-light text-xl mt-8 md:my-40 md:px-8 text-center px-2'>Somos una empresa ubicada en el sur del valle de aburra especilizada en servicios de alquiler de lavadoras lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      <img className='md:w-2/5' src={laundry} alt="" />
    </div>
  )
}

export default About