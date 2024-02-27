import React, { useEffect, useState } from 'react'; 
import './Nav.css'; 


function Nav() {
  const [show, handleShow] = useState(false); 

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false)
    }
  }

  useEffect(() => {
    //As we scroll, the transitionNavBar function will be called
    window.addEventListener('scroll', transitionNavBar)
    //remove the transitionNavBar, clean up
    return () => window.removeEventListener('scroll', transitionNavBar)
  }, [])

  return (
    <div className={`nav ${show && 'nav-black'}`}>
      <div className='nav-contents'>
        <img className='nav-logo' src='https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940' alt=''/>

        <img className='nav-avatar' src='https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png' alt=''/>
      </div>
    </div>
  )
}

export default Nav
