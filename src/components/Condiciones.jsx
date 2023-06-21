import React from 'react'
import terms from '../media/listcheck.svg'



function Testimonials() {

  return (
    <div className='' style={{backgroundColor:`#00e1ff`}}  id='terms'>
      <div className='md:flex items-center pb-8 md:ml-8'>
      <div className='md:w-1/2 text-center pt-4'>
        <ul className='list-disc list-inside text-xl md:text-3xl font-light text-blue-900' >
          <li className='m-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li className='m-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officiis aliquid illum.</li>
          <li className='m-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officiis aliquid.</li>
          <li className='m-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li className='m-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officiis aliquid.</li>
          <li className='m-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officiis aliquid illum.</li>
        </ul>
      </div>

     <img className='mt-4 ml-10 md:w-[500px] w-3/4' src={terms} alt="" />

     </div>
    </div>
  )
}

export default Testimonials