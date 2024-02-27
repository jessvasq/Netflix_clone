import React from 'react'; 
import './Home.css'; 
import Nav from '../NavBar/Nav';
import Banner from '../Banner/Banner';

function Home() {
  return (
    <div className='homeScreen'>
      {/* Nav */}
      <Nav />

      {/* Banner */}
      <Banner />

      {/* Lists */}

    </div>
  )
}

export default Home
