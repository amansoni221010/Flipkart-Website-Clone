import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import StoreIcon from '@mui/icons-material/Store';
import './Login.css'
export default function Login() {
   
  return (
    <div className='logintab' >
        <div className="log_in">
            <p className='nc'>New Customer?</p>
            <p className='su'>Sign Up</p>
            
        </div>
        <div className="log_in">
            <AccountCircleIcon/>
            <p>My Profile</p>
        </div>
        <div className="log_in">
        <img 
            width="20px"
              src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
              alt=""
            />

            <p>Flipkart Plus Zone</p>

        </div>
        <div className="log_in">
            <StoreIcon/>
            <p>Orders</p>

        </div>
        <div className="log_in">
            <FavoriteBorderIcon/>
            <p>Wishlist</p>

        </div>
        <div className="log_in">
            <EmojiEventsIcon/>
            <p>Rewards</p>

        </div>
        <div className="log_in">
            <CardGiftcardIcon/>
            <p>Gift Cards</p>

        </div>

      
    </div>
  )
}
