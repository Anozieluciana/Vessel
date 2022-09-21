import React from 'react'
import styled from 'styled-components'

const BestS = () => {
  return (
    <>
        <Con>
            <Descrip>Our Best Sellers This Month</Descrip>
            <Wrap>
             
                <Card>
                    <Pic src='./Images/new2.jpg'/>
                    <Types>
                        <Name>Beautiful rose flower</Name>
                        <Price>
                            <Collection>300,0000</Collection>
                            <Pri>Buy Now</Pri>
                        </Price>
                    </Types>
                </Card>
              
                <Card>
                    <Pic src='./Images/new5.jpg'/>
                    <Types>
                        <Name>Beautiful rose flower</Name>
                        <Price>
                            <Collection>300,0000</Collection>
                            <Pri>Buy Now</Pri>
                        </Price>
                    </Types>
                </Card>
                <Card>
                    <Pic src='./Images/new4.jpg'/>
                    <Types>
                        <Name>Beautiful rose flower</Name>
                        <Price>
                            <Collection>300,0000</Collection>
                            <Pri>Buy Now</Pri>
                        </Price>
                    </Types>
                </Card>
                <Card>
                    <Pic src='./Images/new3.jpg'/>
                    <Types>
                        <Name>Beautiful rose flower</Name>
                        <Price>
                            <Collection>300,0000</Collection>
                            <Pri>Buy Now</Pri>
                        </Price>
                    </Types>
                </Card>
            </Wrap>
        </Con>
    </>
  )
}

export default BestS
const Pri = styled.div`
height: 45px;
width: 150px;
display: flex;
justify-content: center;
align-items: center;
color: white;
font-family: poppins;
font-size: 17px;
background-color:  #2F123B;
border-radius: 2px;
`
const Collection = styled.div`
font-size: 14px;
font-family: poppins;
 font-weight: 300;
 color: #2F123B;
 margin-left: 2px;
`
const Name = styled.div`
margin-top: 10px;
margin-left: 2px;
font-size: 17px;
font-family: poppins;

`

const Price = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 10px;
`

const Card = styled.div`
width: 300px;
/* height: 400px; */
margin-left: 13px;
margin-bottom: 20px;

@media screen and (max-width:768px){
    width: 100%;
}
`

const Pic = styled.img`
width: 100%;
height: 350px;
object-fit: cover;
object-position: center;
border-radius: 2px;
`

const Types = styled.div``

const Descrip = styled.div`
font-family: poppins;
font-size: 45px;
font-weight: 500;

@media screen and (max-width:380px){
    font-size: 35px;
}
`

const Con = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
padding-top: 20px;
padding-bottom: 50px;
`

const Wrap = styled.div`
width: 85%;
/* background-color: red; */
display: flex;
flex-wrap: wrap;
margin-top: 30px;

@media screen and (max-width:768px){
    justify-content: center;
}
`