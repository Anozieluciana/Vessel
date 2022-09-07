import React,{useState} from 'react'
import styled from 'styled-components'
import {GoThreeBars} from "react-icons/go"
import {GiCancel,GiGloves} from "react-icons/gi"
import {RiAccountCircleLine} from "react-icons/ri"
import {FaCartArrowDown} from "react-icons/fa"


 const Header = () => {
    const [change, setChange] = useState(true)

    const Toggle  = () =>{
        setChange(!change)
    }


  return (
    <div>
        <Con>
            
            <Wrap>
         
              <Logo><span><GiGloves/></span>Vessel</Logo>
          
                <Navs onClick={Toggle} change={change}>
                    <Nav to='/'>Home</Nav>
                    <Nav to='/about'>About</Nav>
                    <Nav to='/schedule'>Services</Nav>
                    <Div>
                        <Icon/>
                        <Acct>Account</Acct>
                    </Div>
                    <Div>
                        <Icon1/>
                        <Acct>Shopping</Acct>
                    </Div>
                  
                </Navs>  
                <MobileHold onClick={Toggle}>
                    {change ? (<GoThreeBars/>) : ( <GiCancel/>)}    
                </MobileHold>                           
            </Wrap>
        </Con>
    </div>
  )
}

export default Header 
const Div = styled.div`
width: 120px;
/* background-color: pink; */
display: flex;
align-items: center;
`
const Icon = styled(RiAccountCircleLine)`
 font-size:20px;
        font-weight:700;
        color: #2C1236;
    font-family: poppins;
`
const Icon1 = styled(FaCartArrowDown)`
 font-size:20px;
        font-weight:700;
        color: #2C1236;
    font-family: poppins;
`
const Acct = styled.div`
 font-size:17px;
        font-weight:700;
        color: black;
    font-family: poppins;
    margin-left: 20px;
`

const Con  = styled.div`
  height: 90px;
    width: 100%;
    display: flex;
    justify-content: center;
    /* background:rgba(90,40,5,40%); */
    background-color: #EFEEF3;
    align-items: center;
    position: fixed;
    /* top: 0; */
    color: white;
    /* z-index:200; */
    backdrop-filter: blur(10px);
  
`

const Wrap = styled.div`
    width:80%;
    height:90%;
    display:flex;
    justify-content:space-between;
    align-items:center;
  
`
const Logo = styled.div`
        font-size: 35px;
        font-family: poppins;
        font-weight: 900;
        cursor: pointer;
        color: black;
        display: flex;
        align-items: center;
        span{
            color: #2C1236;
        }
`

const Navs = styled.div`
    display:flex;
    width:700px;
    //  background-color:blue; 
   justify-content:space-between;
   align-items:center;
   color: black;

   a{
       text-decoration: none;
   }
    
   button{
    width:130px;
    height:45px;
    border:none;
    color:white;
    font-size:15px;
    font-weight:500;
    font-family: poppins;
    border-radius: 5px;
    border: 2px solid black;
    color: black;
    cursor: pointer;
    @media screen and (max-width: 530px){
        width: 120px;
    }
};
span{
    width:180px;
    background-color:#EF4D39;
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-radius:5px;
    @media screen and (max-width: 530px){
        width: 130px;
    }
}
img{
    width:30px;
    display:flex;
    align-items:center;
    justify-content:center;
    // height:45px;
    margin-left:7px;
    @media screen and (max-width: 530px){
        width: 20px;
    }
}

@media screen and (max-width: 768px){
    display:flex;
    flex-direction:column;
    position: absolute;
    height: 80vh;
    width: 50%;
    top: 95px;
    justify-content:space-evenly;
    left: ${({change})=> (change? '-100%' : 0)};
        background-color: black;
        color: white;
        border-radius: 0px 10px 10px 0px;
        transition: all 900ms;

}
 
`

const Nav = styled.div`
        font-size:17px;
        font-weight:700;
        color: black;
    font-family: poppins;
    transform: scale(1.10);
    transition: all 500ms;
    cursor: pointer;

:hover{
    transform: scale(1.40);
    transition: all 500ms; 
    /* text-decoration: line-through; */
}
`

const MobileHold = styled.div`
   display: none; 
   @media screen and (max-width: 768px){
    display:flex;
     
}
`
