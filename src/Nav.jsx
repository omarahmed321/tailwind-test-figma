import React from 'react'
import logo from './assets/audiophile.svg'
import cartLogo from'./assets/Combined Shape.svg'
import menu from './assets/hamburgar.svg'
let aStyle= `uppercase text-white text-[13px] font-bold cursor-[url('/src/assets/pointer.svg'),_auto] hover:text-[#D87D4A] transition `
export default function Nav() {
  return (
    <header className='bg-[#0E0E0E] w-full flex h-20     justify-center fixed'>
        <div className="container justify-between items-center flex border-b border-b-white/20  p-5 ">
        <img src={logo} alt="" className='hidden lg:flex   '/>
        <div className="icons  md:w-[30%] gap-5 hidden md:flex lg:hidden ">
             <img src={menu} alt="" className='lg:hidden' />
                    <img src={logo} alt="" className='   '/>
            

        </div>
                  <div className="smallNav md:hidden flex justify-between items-center w-full   ">
                     <img src={menu} alt="" className='lg:hidden' />
                    <img src={logo} alt="" className='   '/>
                    <img src={cartLogo} alt="" className='  lg:flex md:flex '/>
                  </div>
    <nav className='  gap-8.5  hidden lg:flex' >
<a href="" className={aStyle}>Home</a>
<a href="" className={aStyle }>Headphones</a>
<a href=""className={aStyle}>Speakers</a>
<a href=""className={aStyle}>Earphones</a>
    </nav>
<img src={cartLogo} alt="" className='hidden lg:flex md:flex '/>
        </div>


    </header>
  
  )
}
