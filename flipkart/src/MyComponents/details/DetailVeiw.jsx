import {styled} from '@mui/material'
import { Box , Typography, Button } from '@mui/material';
import { orange } from '@mui/material/colors';
import React from 'react'
import { products } from "../Constants/data";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


const Container=styled(Box)`
display: flex;
justify-content: space-between;
background: #fff;
// background: red;
height: 40px;

align-items: center;
box-shadow: 0 1px 1px 0 rgba(0,0,0,.16);
margin: auto;
`
const Text =styled(Typography)`
cursor: pointer;
flex-grow: 1;
font-weight: 600;
display: flex; 
justify-content: center;
font-size: 14px;

`
const AddCartButton=styled(Button)`

background: orange;
box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
font-size: 16px;
`
const BuyNowButton=styled(Button)`
background: #fb641b;
box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
font-size: 16px;

`
const BothButton=styled(Box)`
display: flex;

justify-content: space-between;
padding: 14px 28px;
`




export default function DetailVeiw() {
    const detailUrl= "https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70";
    const  shortTitle= 'Home & Kitchen';
   const  longTitle='Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)';
      
    //     price: {
    //         mrp: 1195,
    //         cost: 625,
    //         discount: '47%'
    //     },
    //     quantity: 1,
    //     description: 'This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.',
    //     discount: 'Extra 10% Off', 
    //     tagline: 'Deal of the day' 
  return (
    
    
    
    <Box>

        <Container>
        <Text >Electronics</Text>
        <Text>TVs & Appliances</Text>
        <Text>Men</Text>
        <Text>Women</Text>
        <Text>Baby & Kids</Text>
        <Text>Home & Furniture</Text>
        <Text>Sports,Books & More</Text>
        <Text>Flights</Text>
        <Text> Offer Zone</Text>
        </Container>
        <Box style={{
            display: "flex",
        }}>
        <Box  style={{
              width:' 41.66%',
        }}>

            <img src={detailUrl} alt="productdetailimg" style={{
                display: 'flex',
                margin: 'auto',
            }} />
        <BothButton>
                <AddCartButton variant="contained" >
                <ShoppingCartIcon />
                ADD TO CART</AddCartButton>
                <BuyNowButton variant="contained">BUY NOW</BuyNowButton>


         </BothButton>

          
      
        </Box>

        <Box>
            <Typography>Home & Kitchen</Typography>
            <Typography>Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)</Typography>
            
            
        </Box>
        </Box>
    

    
    </Box>
  )
}





