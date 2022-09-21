import React from 'react'
import SlideCard from './SlideCard' 
import './SlideMainCon.css'
// import me from './joe.jpg'

function SlideMainHold() {
  return (
    <div className='SlideMainHolCon'>
      <div className='What'>Customer's <span>Review</span></div>
      <div className='SlideMainHolWrap'>
          <SlideCard/>
      </div>
    </div>
  )
}

export default SlideMainHold