import React from 'react'
import styled from 'styled-components'

const Flower = () => {
  return (
    <Con>
        <Wrap>
            <Box1 src='./Images/new8.jpg'/>
            <Box2>
                <H1>Flowers</H1>
                <P>A CSS Syntax rule consists of a selector, property, and its value. The selector points to the HTML element where CSS style is to be applied. The CSS property is separated by semicolons. 
                It is a combination of selector name followed by the property: value pair that is defined for the specific s A CSS Syntax rule consists of a selector, property, and its value. The selector points to the HTML element where CSS style is to be applied. The CSS property is separated by semicolons. 
                It is a combination of selector name followed by the property: value pair that is defined for the specific s</P>
                <But>Make Bookings</But>
            </Box2>
        </Wrap>
    </Con>
  )
} 

export default Flower
const H1 = styled.div`
font-size: 45px;
font-family: poppins;
font-weight: 800;
color: white;
margin-bottom: 30px;
`

const P = styled.div`
font-size: 16px;
font-family: poppins;
font-weight: 300;
color: white;
margin-bottom: 30px;
width: 95%;
@media screen and (max-width:768px){
   text-align: center;
}
@media screen and (max-width:430px){
   font-size: 14px;
}
@media screen and (max-width:325px){
   font-size: 12px;
}
`

const But = styled.div`
width: 150px;
height: 50px;
background-color: #fff;
display: flex;
justify-content: center;
align-items: center;
border-radius: 2px;
font-family: poppins;
margin-top: 30px;
`

const Box1 = styled.img`
object-fit: contain;
object-position: center;
width: 40%;

@media screen and (max-width:768px){
    display: none;
}

`

const Box2 = styled.div`
width: 60%;
/* background-color: pink; */
display:flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width:768px){
    width:100%;
    /* background-color: red; */
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
`

const Con = styled.div`
width: 100%;
padding-top: 30px;
padding-bottom: 20px;
background-color: black;
display: flex;
justify-content: center;
`
const Wrap = styled.div`
width: 80%;
display: flex;

@media screen and (max-width:768px){
    background:url('./Images/new8.jpg') repeat fixed 100%;
background-position:center;
background-repeat:no-repeat;
background-size: contain;
/* height: 80vh; */
display: flex;
justify-content: center;
align-items: center;
/* width: 100%; */
}
`