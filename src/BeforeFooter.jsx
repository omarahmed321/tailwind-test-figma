import React from 'react'



export default function BeforeFooter() {
  return (
    <>
    <div className='my-30 md:my-24 flex flex-col w-[87.5%] md:w-full h-175 mx-auto text-center lg:flex-row lg:h-147 lg:my-50'>
<div className="footerImage bg-[url('./assets/personSM.svg')] md:bg-[url('./assets/personMD.svg')] lg:bg-[url('./assets/personLG.svg')] w-full h-75 rounded-lg lg:w-135 lg:hidden bg-cover bg-center"></div>

<p className=' uppercase font-bold text-[28px] tracking-[1px] text-black w-[80%] mx-auto mt-10 md:mt-15 md:text-[40px] md:leading-11 md:tracking-[1.43] mb-8 lg:hidden'> Bringing you the <span className='text-[#D87D4A]'>best </span>audio gear</p>
<p className=' text-black/50 text-[15px] leading-6.25 w-[90%] mx-auto lg:hidden'>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>


<div className=" lg:flex-col lg:flex hidden w-[51%] justify-center text-start" >
<p className='hidden lg:block text-black font-bold text-[40px] leading-11 tracking-[1.43px] uppercase w-111.5 mr-auto'>
  Bringing you the<br />
  <span className='text-[#D87D4A]'>best</span> audio gear
</p>
    <p className='hidden lg:flex text-black/50 uppercase text-[15px] leading-6.25 w-[90%] mr-auto '>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
</div>

<div className="lg:flex bg-[url('./assets/personLG.svg')] bg-cover  bg-top rounded-lg w-[50%] h-147 bg-no-repeat hidden"></div>







    </div>










    </>
  )
}
