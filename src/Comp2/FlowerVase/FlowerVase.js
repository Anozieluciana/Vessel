import React,{useEffect} from 'react'
import styled from 'styled-components'
import Aos from "aos"
import "aos/dist/aos.css"

const FlowerVase = () => {
  
  useEffect(()=>{
    Aos.init({duration:1500})
        }, [])


  return (
    <Con>
        <Wrap>
            <Box1 src="./Images/pic2.jpg" data-aos="fade-right"/>
            <Box2 data-aos="fade-left">
                <CardHold1 >
                  <Flo1 src='./Images/new9.jpg'/>
                  <Flo2 src='./Images/new2.jpg'/>
                </CardHold1>
                <CardHold2 >
                <Flo1 src='./Images/new11.jpg'/>
                  <Flo2 src='./Images/new6.jpg'/>
                </CardHold2>
            </Box2>
        </Wrap>
    </Con>
  )
}

export default FlowerVase
const Flo1 = styled.img`
width: 100%;
object-fit: cover;
object-position: center;
/* background-color: peachpuff; */
height: 200px;
border-radius: 5px;
`

const Flo2 = styled.img`
width: 100%;
/* background-color: peachpuff; */
object-fit: cover;
object-position: center;
height: 260px;
margin-top: 10px;
border-radius: 5px;
`
const CardHold1 = styled.div`
height: 100%;
width: 294px;
/* background-color: red; */

`
const CardHold2 = styled.div`
height: 100%;
width: 294px;
/* background-color: blue; */
margin-left: 20px;


`
const Box1 = styled.img`
height: 470px;
width: 48%;
/* background-color: red; */
/* background-image: url("./Images/pic2.jpg");
background-position: center;
background-repeat: no-repeat;
background-size: cover; */
object-fit: cover;
object-position: center;
border-radius: 5px;

@media screen and (max-width:768px){
 width: 100%;
}
`

const Box2 = styled.div`
display:flex;
height: 470px;
width: 48%;
/* background-color: pink; */
margin-left: 20px;
@media screen and (max-width:768px){
 width: 100%;
 margin-left: 0px;
 margin-top: 20px;
}
`

const Con = styled.div`
display: flex;
justify-content: center;
width: 100%;
padding-top: 20px;
padding-bottom: 20px;

`
const Wrap = styled.div`
width:80%;
/* background-color: gray; */
display: flex;
/* flex-wrap: wrap; */
justify-content: space-between;

@media screen and (max-width:768px){
  flex-direction: column;
}
`