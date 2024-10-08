import React from 'react'
import './featured.css'
import Dublin from '../../assets/Dublin.jpg'
import Austin from '../../assets/Austin.jpg'
import Reno from '../../assets/Reno.jpg'

const Featured = () => {
  return (
    <div className='featured'>
       

        <div className="featuredItem">
          <img src ={Dublin} className='featuredItem' />
          <div className="featuredTitles">
            <h1>Dublin</h1>
            <h2>123 properties</h2>
          </div>
        </div>

        <div className="featuredItem">
          <img src ={Austin } className='featuredItem' />
          <div className="featuredTitles">
            <h1>Austin</h1>
            <h2>532 properties</h2>
          </div>
        </div>

        <div className="featuredItem">
          <img src ={Reno} className='featuredItem' />
          <div className="featuredTitles">
            <h1>Reno</h1>
            <h2>533 properties</h2>
          </div>
        </div>
   
    </div>
  )
}

export default Featured
