import React from 'react'
import speaker2 from './assets/Lowerp2Speaker.svg'
let cursorS = ` cursor-[url('/src/assets/pointer.svg'),_auto] `
export default function Page2() {
  return (

    <div className=' lg:h-140 bg-[#D87D4A] flex flex-col lg:flex-row rounded-lg lg:justify-around  items-center px-6 py-15 md:px-42.5 w-[87.5%] md:w-full mx-auto overflow-hidden '>
<img src={speaker2} alt="" className=' lg:ml-30 lg:mt-24 md:w-[60%] w-[70%] lg:w-[40%]'/>
<div className="data md:mt-16 md:w-[80%]  lg:w-[31.5%] w-[80%] text-center lg:text-start mx-auto mt-8 ">
  <h1 className=' font-bold md:text-[56px] md:leading-14.5 md:tracking-[2px] uppercase md:w-[75%] text-[36px] leading-10 tracking-[1.29px] lg:mx-0 mx-auto'>
ZX9
SPEAKER
  </h1>
  <p className='mt-6 text-[#FFFFFF]/75  text-[15px] leading-6.25'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
  <button className={'lg:bg-[#4C4C4C]  bg-[#000000] font-bold text-[13px] tracking-[1px] uppercase px-7.5 py-3.75 mt-6 md:mt-10 ' + cursorS}>See Product</button>
</div>
    </div>







  )
}
