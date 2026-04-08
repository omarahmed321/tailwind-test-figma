import React from 'react'
import Nav from './Nav'
import headphone from './assets/headphone.png'
import Secondpage from './Secondpage'
let cursorS = ` cursor-[url('/src/assets/pointer.svg'),_auto] `
export default function App() {
  return (
  <app   >
        <div className='h-dvh flex justify-center '>
      
       
<Nav />
<div className="background z-[-2] bg-[#101010] w-full h-dvh absolute"></div>
<aside className='   justify-start items-center bg-[#101010] hidden lg:flex '>
  <div className="content w-[50%] flex flex-col gap-6 items-start justify-center">
    <p className='uppercase text-[#FFFFFF]/49.5 text-[14px] tracking-[10px]'>new product</p>
    <h1 className='uppercase font-bold tracking-[2px] text-[56px] leading-14.5'>XX99 mark ii HeadPHones</h1>
    <p className='text-[15px] leading-6.25 text-[#FFFFFF]/75'>Experience natural, lifelike audio and exceptional <br />build quality made for the passionate music <br />enthusiast.</p>
    <button className={'font-bold tracking-[1px] uppercase bg-[#FBAF85] w-40 h-12 text-[13px] mt-4 ' + cursorS}       >See Product</button>
  </div>

</aside>
<div className="small-medium lg:hidden relative z-[-1] flex justify-center items-center text-center  overflow-hidden  ">
<div className="overlay lg:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex  justify-center items-center ">
    <div className="content w-[60%] md:w-[50%] flex flex-col gap-6 justify-center items-center">
    <p className='uppercase text-[#FFFFFF]/49.5 text-[14px] tracking-[10px]'>new product</p>
    <h1 className='uppercase font-bold tracking-[2px] text-[36px] md:text-[56px] leading-14.5'>XX99 mark ii HeadPHones</h1>
    <p className='text-[15px] leading-6.25 text-[#FFFFFF]/75'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
    <button className={'font-bold tracking-[1px] uppercase bg-[#FBAF85] w-40 h-12 text-[13px] mt-4 ' + cursorS}       >See Product</button>
  </div>
</div>
<div className=' overflow-hidden '><img src={headphone} alt="" className=' w-full object-cover '/></div>
</div>

<img src={headphone} alt="" className=' hidden lg:flex '/>







      
  
   
    </div>
    
    <Secondpage />
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  </app>

  )
}
