import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            {/* <h2>Order Your Favourite Cake Here!</h2>
            <p>Choose from a diverse menu featuring a delectable array of Cakes <br></br>crafted with finest Flavours</p> */}
            <a href="#food-display"><button>View Menu</button></a>
        </div>
      
    </div>
  )
}

export default Header
