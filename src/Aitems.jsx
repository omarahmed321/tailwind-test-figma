import React from 'react'
import headphoneitem from './assets/headphoneitem.svg'
import circleSp from './assets/circlespeaker.svg'
import speaker from './assets/speaker.svg'
export default function Items() {
  return (
    
     
     
     <div className="Items flex gap-7.5 w-full justify-between absolute top-30 ">


    <div className="item  h-71 bg-amber-700 w-1/3 flex flex-col items-center">
<img src={headphoneitem} alt="" className=' relative -top-20' />
<p>HEADPHONES</p>
<a href="">SHOP  &gt;</a>
    </div>


    <div className="item  h-71 bg-amber-700  w-1/3 flex flex-col items-center">
<img src={speaker} alt="" className=' relative -top-20'/>
<p>SPEAKER</p>
<a href="">SHOP  &gt;</a>
    </div>



    <div className="item  71 bg-amber-700 w-1/3 flex flex-col items-center">
<img src={circleSp} alt="" className=' relative -top-20'/>
<p>
EARPHONE
</p>
<a href="">SHOP  &gt;</a>
    </div>


</div>




  
  )
}
