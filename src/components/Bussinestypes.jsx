import React from 'react'
import computer2 from '../images/computer2.png'
import arrow from '../images/arrow.svg'

export const Bussinestypes = () => {
  return (
    <div>
<div className='float-3'>
<div>
<p className='buss'></p>
<p className='stream'>Streamline Business with ease</p>
<p className='buss-types'> 
  
There’s no one-size-fit-all in business, so we are here with our streamlined customized approach for all business types.</p>

<div className='float-4' >
<div>

   <li className='brown'> < span className='lightcolor' >Retail</span>  </li>
   <li className='pink' >  <span className='lightcolor' >Restaurants </span>     </li>
   <li className='green' > <p className='lightcolor'> Grocery Stores </p> </li>
   <li className='skyblue'><p className='lightcolor' > Spa and Sallon</p></li>
   <li className='blue' > < span className='lightcolor' >Electronics</span></li>

   <div className='free'   >  
   <button ></button>

   </div>
  
</div>
<div className='arrows'>
<div><img src={arrow}/></div>
<div><img src={arrow}/></div>
<div><img src={arrow}/></div>
<div><img src={arrow}/></div>
<div><img src={arrow}/></div>

{/* </div> */}

</div>

</div>




</div>
<div className='computer-2' >
<img className='img'  src={computer2}   />

</div>
</div>


    </div>
  )
}
