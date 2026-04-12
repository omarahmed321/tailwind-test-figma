import React from 'react'

import Items from './Aitems'
import Page2 from './Page2'
import earphone from './assets/earphone.svg'
import BeforeFooter from './BeforeFooter'
import Footer from './Footer'
let cursorS = ` cursor-[url('/src/assets/pointer.svg'),_auto] `
export default function Secondpage() {
  return (<>
    <div className='  flex flex-col container  bg-white h-full mx-auto '>
<Items />


<div className="blocks flex flex-col lg:gap-12 md:gap-8 gap-6">
<Page2 />


<div className="speakerOnDesk bg-[url('./assets/speaker-on-desk.svg')] md:bg-[url('./assets/speakerOnDiskMD.svg')]  w-[87.5%] md:w-full h-50 mx-auto rounded-lg bg-cover flex flex-col justify-center bg-center bg-no-repeat  py-36 md:h-70 lg:h-110 md:bg-bottom-left">
<div className=' ml-7 md:ml-15.5 lg:ml-23.75 '>

  <h3 className='font-bold text-[28px] tracking-[2px] uppercase text-black mb-8'>ZX7 SPEAKER</h3>
<button className={'font-bold text-[13px] tracking-[1px] uppercase px-7.5 py-3.75 lg:bg-black lg:text-white text-black border border-black'+ cursorS}>See Product</button>
</div>


</div>

<div className="last2divs flex flex-col  w-[87.5%] md:w-full mx-auto  gap-6 md:flex-row md:gap-2.75 lg:gap-7.5">

<div className="rounded-lg md:w-[50%] md:h-80 bg-cover bg-center bg-no-repeat bg-[url('./assets/earphone.svg')] md:bg-[url('./assets/earphoneMD.svg')] lg:bg-[url('./assets/earphoneLG.svg')] h-50 lg:h-80  ">
</div>


<div className='bg-[#F1F1F1] py-10 rounded-lg md:w-[51%] md:py-25 md:pl-5 md:h-80 lg:h-80 lg:py-25'>
  <p className='font-bold text-[28px] tracking-[2px] uppercase text-black bg-[#F1F1F1] mb-8 rounded-lg ml-6 lg:ml-23.75'>YX1 EARPHONES</p>
  <button className={'font-bold text-[13px] tracking-[1px] uppercase border border-black text-black py-3.75 px-7.5 ml-6 lg:bg-black lg:text-white lg:ml-23.75' + cursorS}>See Product</button>
</div>
</div>

<BeforeFooter />




















</div>











    </div>
    <Footer />
    </>
  )
}
