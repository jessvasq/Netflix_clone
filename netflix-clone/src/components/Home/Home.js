import React from 'react'; 
import './Home.css'; 
import Nav from '../NavBar/Nav';
import Banner from '../Banner/Banner';
import requests from '../../requests';
import List from '../Lists/List';

function Home() {
  return (
    <div className='homeScreen'>
      {/* Nav */}
      <Nav />
      {/* Banner */}
      <Banner />
      {/* Lists */}
      {/* <List title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeList/>
      <List title='Trending Now' fetchUrl={requests.fetchTrending}/> */}
      {/* <List title='Top Rated' fetchUrl={requests.fetchTopRated}/>
      <List title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
      <List title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
      <List title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
      <List title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
      <List title='Documentaries' fetchUrl={requests.fetchDocumentaries}/> */}
    </div>
  )
}

export default Home
