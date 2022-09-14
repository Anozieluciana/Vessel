import React from 'react'
import styled from 'styled-components'

const Hero = () => {
  return (
    <Con>
        <Wrap>
      {/* <Pic></Pic> */}
          <Box1>
            <Hold>
              <P>Fresh Flowers</P>
              <Lit>Natural & Beautiful Flowers</Lit>
              <Lorem>A CSS Syntax rule consists of a selector, property, and its value. The selector points to the HTML element where CSS style is to be applied. The CSS property is separated by semicolons. 
It is a combination of selector name followed by the property: value pair that is defined for the specific s</Lorem>
        <ButHold>
            <But1>Shop Now</But1>
            <But2>Explore More</But2>
        </ButHold>
</Hold>
          </Box1>
          <Box2>
            <img src='./Images/nobg1.png' alt='a flower vase'/>
          </Box2>
     
        </Wrap>
    </Con>
  )
}

export default Hero
const ButHold = styled.div`
display: flex;
margin-top: 40px;

@media screen and (max-width: 768px){
    justify-content: center;
    width: 100%;
  }

  @media screen and (max-width:480px){
    flex-direction: column;
    align-items: center;
  }
`

const But1 = styled.div` 
width: 150px;
height: 50px;
border: solid 1px black;
color: black;
font-family: poppins;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
border-radius: 2px;

:hover{
  color: white;
  background-color: #2F123B;
  border: solid 1px #2F123B;
}

@media screen and (max-width:480px){
    width: 80%;
  }
`

const But2 = styled.div`
width: 150px;
height: 50px;
border: solid 1px black;
color: black;
font-family: poppins;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
margin-left: 30px;
border-radius: 2px;

:hover{
  color: white;
  background-color: #2F123B;
  border: solid 1px #2F123B;
}
@media screen and (max-width:480px){
    width: 80%;
    margin-left: 0px;
    margin-top: 20px;
  }
`

const Hold = styled.div`
margin-left: 20px;

@media screen and (max-width: 768px){
    width: 100%;
    margin: 0px;
    /* background-color: red; */
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`
const P = styled.div`
font-weight: 800;
font-size: 45px;
font-family: poppins;
color:black;
margin-bottom: 5px;

@media screen and (max-width: 768px){
    text-align: center;
    color: #fff;
  }
  @media screen and (max-width:375px){
    font-size: 30px;
    width: 80%;
  }
`
const Lit = styled.div`
font-weight: 600;
font-size: 40px;
font-family: poppins;
color: #2F123B;
margin-bottom: 10px;
@media screen and (max-width: 768px){
    text-align: center;
    color: #fff;
  }
@media screen and (max-width:500px){
    font-size: 32px;
    width: 80%;
  }
@media screen and (max-width:375px){
    font-size: 25px;
    width: 80%;
  }
  
`
const Lorem = styled.div`
font-weight: 500;
font-size: 17px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
color:black;
margin-bottom: 20px;
@media screen and (max-width: 768px){
    text-align: center;
    width: 80%;
   /* background-color: pink; */
   color: #fff;
  }
`
const Box1 =styled.div`
  background-color: peach;
  width: 60%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px){
    width: 100%;
  }
`
const Box2 = styled.div`
   /* background-color: pink; */
  width: 50%;


  img{
    object-fit: contain;
    max-height: auto;
    max-width: 100%;
  }

  @media screen and (max-width: 768px){
    display: none;
  }
`
const Con = styled.div`
width: 100%;
/* height: 500px; */
background-color: #EFEEF3;
/* background-color: red; */
display: flex;
justify-content: center;
align-items: center;
padding-top: 10px;
padding-bottom: 40px;
`


const Wrap = styled.div`
display: flex;
width: 80%;
background-color: #FAF4F8;
height:auto;
padding-bottom: 10px;

@media screen and (max-width: 768px){
  background:url('./Images/pic1.jpg') repeat fixed 100%;
background-position:center;
background-repeat:no-repeat;
background-size: cover;
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
}
`

const Pic = styled.div`
display: none;


`