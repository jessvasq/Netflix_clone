import React, { useEffect, useState } from 'react'; 
import './Nav.css'; 
import { useNavigate } from 'react-router-dom';


function Nav() {
  const [show, handleShow] = useState(false); 
  const navigate = useNavigate();

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
        <div onClick={()=> navigate('/')}>
          <img className='nav-logo' src='https://www.designmantic.com/blog/wp-content/uploads/2016/07/Netflix-Revamps-Logo.jpg' alt=''/></div>

        <div onClick={()=> navigate('/profile')}>
          <img className='nav-avatar' src='https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png' alt=''/></div>
      </div>
    </div>
  )
}

export default Nav
