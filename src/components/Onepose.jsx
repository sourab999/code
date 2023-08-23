import React from 'react'
import phones from '../images/2phones.png'
import image4 from '../images/image4.png'
import phone from '../images/1phone.png'



export const Onepose = () => {
  return (
    <div>
<div className='img4' >
<img   src={image4}/>
     </div>
<div className='flex5' >
<div>

{/* <div className='c-img1'>  <p className='change' >Quick Bill</p></div> */}

<div className='flex'>
  <p className='c-img1'></p>
  <p className='change'>Quick Bill</p>
</div>

<div className='flex' > 
<p className='c-img2'></p>  <p className='change' >Billing</p>

 </div>
<div className='flex' >
<p className=' c-img3'></p> <p className='change' >Inventory Managemet</p>


</div>
<div className='flex' >
<p className=' c-img4'> </p> <p className='change' >e Store</p>


</div>
<div className='flex' >
<p className='c-img5 '> </p> <p className='change' >Khata</p>

</div>

</div>
 <div> 
<img className='phone2' src={phones}/> 

</div>
<div>

  <div className='flex' >
  <p className='c-img6'> </p> 
  <p className='change' >CRM & Loyality</p>

  </div>
  <div className='flex' >
  <p className='c-img7'> </p> 
  <p className='change' >Digital Payments</p>

  </div>
  <div className='flex'  >
  <p className=' c-img8'> </p>
   <p className='change' >Reporting</p>

  </div>
  <div className='flex' >
  <p className=' c-img9'> </p> 
  <p className='change' >E-way Billing</p>

  </div>

  <div className='flex' >
  <p className='c-img10 '></p>  
  <p className='change' >E-invoicing</p>

  </div>



</div>

</div>


{/* one phone */}
<div  className='flex6'>
<div >
<p className='journey' >3, 2, 1 and take off on a profitable journey!</p>
<p className='get'>Get moving with the journey to integrate QueueBuster POS with your business.</p>

<div className='spread' >
<div >
<p className='icon1'></p>

</div>
<div>
<p className='dark'>
First things first</p>
<br></br>
<p className='max' >Download our POS app for your Android device.</p>



</div>

</div>

<div className='spread' >
<div >
<p className='icon2'></p>

</div>


<div> <p className='dark'>A Surprising Sign-up</p>

<br></br>
<p className='max'  >Jump on the bandwagon with a free 30-day trial! Just drop your business details and explore all features.
</p></div>

</div>


<div className='spread' >
<div >
<p className='icon3'></p>

</div>

<div>
<p className='dark'> 
And voila… A Stellar setup</p>
<br></br>
<p className='max'  >
Whip up your POS system in a flash. Get ready to own your business from any corner of the World in no time.
</p>


</div>

</div>



</div>
<div >
<img className='phone1' src={phone}/>
</div>


</div>

<div className='client'>
    <p>our clients love us!</p>
</div>


<div className='flex7'>
    <div className='card'>
      <p className='comma'></p>
<p className='explored'>We explored numerous POS solutions for our pubs and grocery stores, but none provided us with the ideal fit until we discovered this software. The Billing Software solution is highly flexible and reasonably priced.</p>
<p className='chimba' >Chimba Uba</p>
<p className='OSR'>OSR Head</p>
<p className='nigeria'>Heinken NIgeria</p>
 </div>

 <div className='card'>
 <p className='comma'></p>

<p className='explored2'>We explored numerous POS solutions for our pubs and grocery stores, but none provided us with the ideal fit until we discovered this software. The Billing Software solution is highly flexible and reasonably priced.</p>
<p className='chimba' >Chimba Uba</p>
<p className='OSR'>OSR Head</p>
<p className='nigeria'>Heinken NIgeria</p>
 </div>
    
 <div className='card'>
 <p className='comma'></p>

<p className='explored3'>We explored numerous POS solutions for our pubs and grocery stores, but none provided us with the ideal fit until we discovered this software. The Billing Software solution is highly flexible and reasonably priced.</p>
<p className='chimba' >Chimba Uba</p>
<p className='OSR'>OSR Head</p>
<p className='nigeria'>Heinken NIgeria</p>
 </div>
    
</div>



    </div>
    
  )
}
