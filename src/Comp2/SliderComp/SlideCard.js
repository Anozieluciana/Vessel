import React from 'react'
import './SlideCard.css'
import data from './data.json'
import pic from './joe.jpg'
import {AiFillStar} from "react-icons/ai"


function SlideCard(props) {
  return (
    <>
    {data?.map((props)=>{
      return(
        <div className='SliderBox'  key={props.id}>
          <div className='stars' style={{display:"flex", marginBottom:"20px"}}>
            <AiFillStar size="20px" style={{color:" green"}}/>
            <AiFillStar size="20px" style={{color:" green", marginLeft:"5px"}}/>
            <AiFillStar size="20px" style={{color:" green", marginLeft:"5px"}}/>
            <AiFillStar size="20px" style={{color:" green", marginLeft:"5px"}}/>
            <AiFillStar size="20px" style={{color:" green", marginLeft:"5px"}}/>
          </div>
        <div className='SlideHold'>
          <div className='SlideCardPic'>
            <img src={pic} alt=''/>
          </div>
          <div className='SliHold'>
            <div className='SlideCardName'>john Doe</div>      
            <div className='SlideCard2Name'>ceo motion design agency</div>
          </div>
        </div>
        <div className='SlideCardTest'>
          {props.content}
        </div>
      </div>
      )
    })}
    
    </>

  )
}

export default SlideCard