import React from 'react';


function Navbar() {
  return (
    <div className='navbar'>
      <div className='namegroup'> 
        P-CARE
      </div> 

    <ul className='navbar-menu'>
        <li><a href="/">Home</a></li>
        <li><a href="/GPS">GPS</a></li>
        <li><a href="/BMI">BMI</a></li>        
    </ul>
    </div>
  )
}

export default Navbar;