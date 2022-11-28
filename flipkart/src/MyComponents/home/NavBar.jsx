// import React from 'react'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system';
import {navData } from '../Constants/data'

const Component =styled(Box)(({theme})=>({
display: 'flex',
margin: '0px 130px 0px 130px',
justifyContent: 'space-between',
overflow: 'hidden',
[theme.breakpoints.down('lg')]:{
    margin: 0

}

}));
const Container=styled(Box)`
padding: 12px 8px;
text-align: center;
`
// in typography it convert the margin and padding to 0
const text=styled(Typography)`
font-size: 14px;
font-weight: 600;
font-family: inherit

`

const NavBar=()=> {
  return (
  
    <Component>
        {
            navData.map(data =>( 
                // data is come from data.jsx
                <Container>
                    <img src={data.url} alt="nav"  style={{
                        width: 64
                    }}/>
                    <Typography>{data.text}</Typography>

                </Container>

            ))
        }
    </Component>
   
  )
}
export default  NavBar
