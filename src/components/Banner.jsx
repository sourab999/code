import React from 'react'

import computer from '../images/computer.png'

export const Banner = () => {
  return (
    <div>
<div className='flex-2'>
<div className='smart-android'>
<p className='smart'>Smart Android pos</p>
<p className='bill'>Billing Software</p>
<p className='manage'>We manage your point of sale and keep everything around your business up-to-date with our all-in-one POS App.</p>
<button className='start'>Get Started</button>
<button className='contact'>Contact sales</button>

</div>
<div className=''>
<img className='img'  src={computer}   />


</div>
</div>
{/* rectangle */}

<div className='rectangle' >
<div className='numbers'>
<li>50,000+</li>
<li>5+</li>
<li>6+</li>
<li>50+</li>
<li>100K</li>
</div>

<div className='text'>
<li>Customers</li>
<li>Industries</li>
<li>Years</li>
<li>Integration</li>
<li>Downloads</li>



</div>
</div>


    </div>
  )
}
