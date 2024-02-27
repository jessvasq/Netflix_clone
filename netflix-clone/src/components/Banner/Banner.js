import React from 'react'; 
import './Banner.css';


function Banner() {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }
        
    return (
        <header className='banner' style={{
            backgroundImage: `url('https://www.xfire.com/wp-content/uploads/2022/09/netflix-cover-2-800x450.png')`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center center'
        }}>

            <div className='banner-content'>
                <h1 className='banner-title'>Movie Name</h1>
                <div className='banner-buttons'>
                    <button className='banner-bttn'>Play</button>
                    <button className='banner-bttn'>My List</button>
                </div>
                <h1 className='banner-desc'> 
                {truncate(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, 180)}
                </h1>
            </div>

            <div className='banner-fadeBottom'/>

        </header>
  )
}

export default Banner;
             