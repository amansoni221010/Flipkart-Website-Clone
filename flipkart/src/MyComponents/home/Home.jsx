import React from "react";
import NavBar from "./NavBar";

import Banner from "./Banner";
import Slide from "./Slide";
import { Box, styled } from "@mui/material";

import MidSlide from "./MidSlide";

const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
  // background: red;
`;

export default function Home() {
  

  return (
    <>
      <NavBar />
      <Component>
        {/* here i used the box beacause after the navbar their is color in every elements */}
        <Banner />
        <MidSlide  title="Deals of the Day"  timer={true}/>
        <Slide  title="Beauty, Food, Toys & more" timer={false}/>
        <Slide  title="Winter Essentials" timer={true}/>
        <Slide  title="Hand-picked Christmas Specials" timer={false}/>
        <Slide  title="Sports, Healthcare & more" timer={false}/>
        <Slide  title="Wedding & Gifting Specials" timer={true}/>
        <Slide  title="Home & Kitchen Essentials" timer={false}/>
        <Slide  title="New Year Specials" timer={false}/>
        <Slide  title="Grooming, Books, Auto & more" timer={false}/>
        <Slide  title="Fashion Top Deals" timer={false}/>
        
      </Component>
    </>
  );
}
