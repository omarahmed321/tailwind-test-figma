import React from 'react'
import headphoneitem from './assets/headphoneitem.svg'
import circleSp from './assets/circlespeaker.svg'
import speaker from './assets/speaker.svg'
let cursorS = ` cursor-[url('/src/assets/pointer.svg'),_auto] `

export default function Items() {
  return (
    
     
     
     <div className="Items flex flex-col md:flex md:flex-row gap-22 md:gap-7.5 w-full mt-55 mb-42 justify-center items-center">


    <div className={"item group h-51 bg-[#F1F1F1] md:w-1/3 flex flex-col items-center w-[87%]  "+cursorS }>
<img src={headphoneitem} alt="" className=' -mt-23 mb-9 ' />
<p className="font-bold text-[18px] tracking-[1.29px] uppercase text-[#000000] mb-4">HEADPHONES</p>
<a href="" > <span className='group-hover:text-[#D87D4A] transition duration-300 font-bold text-[13px] tracking-[1px] uppercase text-[#000000]/50' > SHOP</span> <span className='text-[#D87D4A] '>&gt;</span> </a>
    </div>


    <div className={"item group h-51 bg-[#F1F1F1] md:w-1/3 flex flex-col items-center  w-[87%] "+cursorS }>
<img src={speaker} alt="" className='-mt-20 mb-9'/>
<p className="font-bold text-[18px] tracking-[1.29px] uppercase text-[#000000] mb-4">SPEAKER</p>
<a href="" > <span className='group-hover:text-[#D87D4A] transition duration-300 font-bold text-[13px] tracking-[1px] uppercase text-[#000000]/50' > SHOP</span> <span className='text-[#D87D4A] '>&gt;</span> </a>
    </div>



    <div className={"item group h-51 bg-[#F1F1F1] md:w-1/3 flex flex-col items-center  w-[87%] "+cursorS }>
<img src={circleSp} alt="" className='-mt-20 mb-9'/>
<p className="font-bold text-[18px] tracking-[1.29px] uppercase text-[#000000] mb-4">
EARPHONE
</p>
<a href="" > <span className='group-hover:text-[#D87D4A] transition duration-300 font-bold text-[13px] tracking-[1px] uppercase text-[#000000]/50' > SHOP</span> <span className='text-[#D87D4A] '>&gt;</span> </a>
    </div>


</div>




  
  )
}
