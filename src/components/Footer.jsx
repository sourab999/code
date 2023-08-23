import React from 'react'
import logo from "../images/logo.svg"
import twitter from "../images/twitter.png"
import linkedin from "../images/Path 9023.png"
import instagram from "../images/instagram (1).png"
import fb from "../images/Group 66091.png"
import youtube from '../images/youtube.png'






export const Footer = () => {
  return (
    <div className='final-flex'>
<ul className='logo2'>
  <img src={logo}/>
<ul>Address
<li>Unit No. 401, 4th Floor, Pegasus One Tower, Plot No. A-10, <br></br>Sector - 68, Noida, Uttar Pradesh-201307</li>
</ul>
<ul>Email
<li>contact@xyz.com</li>
</ul>
<ul>Phone
<li>011-2324649</li>
</ul>
<ul>Social
<li >
  <img src={twitter}/>
  <img src={linkedin}/>
  <img src={instagram}/>
  <img src={fb}/>
  <img src={youtube}/>




  
    </li>
</ul>



</ul>

<ul className='same'>Company
<li>HomePage</li>
<li>About Us</li>
<li>Carrers</li>
<li>Contact US</li>
<li>Pricing</li>
<p>Contact</p>
<li>For Any Queries.PLease Contact us at  </li>
<div>+91 987 658 3210</div>
</ul>

<ul className='same'>Resources
<li>Blog</li>
<li>Help and Support </li>
<li>Privacy Policy</li>
<li>Terms and Conditions</li>


</ul>

<ul className='same'>Bussiness types
<li>Retail POS</li>
<li>Restaurent POS</li>
<li>Grocery POS</li>
<li>Spa & SAloon POS</li>
<li>Grocery Pos</li>


</ul>



    </div>
  )
}
