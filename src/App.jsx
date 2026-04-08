import React from 'react'
import Nav from './Nav'
import headphone from './assets/headphone.png'
let cursorS = ` cursor-[url('/src/assets/pointer.svg'),_auto] `
export default function App() {
  return (
    <div className='h-dvh flex'>
      
       
<Nav />
<aside className=' grow flex justify-center items-center bg-[#101010]'>
  <div className="content w-[40%] flex flex-col gap-6">
    <p className='uppercase text-[#FFFFFF]/49.5 text-[14px] tracking-[10px]'>new product</p>
    <h1 className='uppercase font-bold tracking-[2px] text-[56px] leading-14.5'>XX99 mark ii HeadPHones</h1>
    <p className='text-[15px] leading-6.25 text-[#FFFFFF]/75'>Experience natural, lifelike audio and exceptional <br />build quality made for the passionate music <br />enthusiast.</p>
    <button className={'font-bold tracking-[1px] uppercase bg-[#FBAF85] w-40 h-12 text-[13px] mt-4 ' + cursorS}       >See Product</button>
  </div>

</aside>
<img src={headphone} alt="" className=' '/>







      
  
   
    </div>
  )
}
