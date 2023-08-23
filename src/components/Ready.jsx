import React from 'react'
import google from '../images/google.png'
import computer3 from "../images/computer3.png"
export const Ready = () => {
  return (
    <div>
<div className='ready'>

<div>
<p className='try'>Ready To Give It A Try?</p>
<p className='industry'>We are the industry standard for POS solutions meeting your business needs with tailored approach and 24*7 customer support. When you’re ready to experience the best, feel free to fill out the form for a demo and our experts will call you shortly.</p>
<div className='again-flex'>
<button className='sales'>Contact sales</button>
<img className='google' src={google}/>

</div>
</div>
<div>

<img className='img-com' src={computer3}/>

</div>



</div>



    </div>
  )
}
