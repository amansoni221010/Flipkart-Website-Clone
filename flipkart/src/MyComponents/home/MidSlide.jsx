import { Box , styled} from '@mui/system'
import React from 'react'

import Slide from './Slide'
import { products } from "../Constants/data";

const Component=styled(Box)`
display: flex;
width: 100%;

`
// here i made the left component 100% for the medium screen by the responsiveness
const LeftComponent=styled(Box)(({theme})=>({
width: '83%',
[theme.breakpoints.down('lg')]:{
    width: '100%'

}

}));

// here i made the site responsive by the this 
//  if  the screen becomes medium screen then the rightcomponent will not show and make the left component full width 
const RightComponent=styled(Box)(({theme})=>({
background: '#FFFFFF',
padding: 5 ,
margintop: 10,
marginleft: 10,
width: '17%',
textAlign: 'center',
[theme.breakpoints.down('lg')]:{
    display: "none"

}

}));

export default function MidSlide( {products , title ,timer}) {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
  return (

<Component>
    <LeftComponent>
        <Slide products={products} title={title} timer={timer}/>

    </LeftComponent>
    <RightComponent>
        <img src={adURL} alt="ad"  style={{
            width : 217
        }}/>
    </RightComponent>
</Component>

  )
}
