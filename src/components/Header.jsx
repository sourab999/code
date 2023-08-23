import React from 'react'
import logo from '../images/logo.svg'

export const Header = () => {
  return (
    <div>
<div className='Header'>
    <div>
<img className='logo1' src={logo}/>
</div>    

<div className='same-nav'>Industry Tpes </div>
<div className='same-nav'>Features </div>
<div className='same-nav'>Knowledge Base  </div>
<div className='same-nav'>Pricing  </div>
<div className='same-nav'>Login  </div>

<button className='sign-up'>sign up</button>
<button className='free-demo'>Get Free Demo</button>
</div>
    </div>
  )
}
