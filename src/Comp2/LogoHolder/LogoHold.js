import React from 'react'
import styled from 'styled-components'

const LogoHold = () => {
  return (
    <Con>
        <Wrap>
          <Box1></Box1>
          <Box2></Box2>
        </Wrap>
    </Con>
  )
}

export default LogoHold
const Box1 = styled.div`
height: 400px;
height: 500px;
`

const Box2 = styled.div`
height: 400px;
height: 500px;
`

const Con = styled.div`
display: flex;
justify-content: center;
width: 100%;

`
const Wrap = styled.div`
width:80%;
background-color: gray;
display: flex;
`