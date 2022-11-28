// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Main from './MyComponents/Main';
import Carts from './MyComponents/Carts';
import Footer from './MyComponents/Footer';

import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
  
// } from "react-router-dom";


import More from './MyComponents/Main'
import Cart from './MyComponents/Cart';
import Home from './MyComponents/home/Home';
import { Box } from '@mui/system';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import DetailVeiw from './MyComponents/details/DetailVeiw';



// aman soni
function App() {




  return (
    <>
<BrowserRouter>

    <Header/>
    <Box>


      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<DetailVeiw/>}/>
        </Routes>
    </Box>
    
</BrowserRouter>
    
    {/* <Main/> */}


    {/* <Carts/> */}
     {/* <Footer/> */}
    </>
  );
}

export default App;
