import React, { useEffect } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import MoreT from "./MoreT";
import Login from "./Login";

// import { useEffect} from "react";

import alanBtn from "@alan-ai/alan-sdk-web";

//  for the light mode use this import and in the tippy write the theme="light"
import "tippy.js/themes/light.css";
import { useState } from "react";
import LoginDialog from "./login/LoginDialog";

import { Link } from "react-router-dom";
export default function Header() {
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  };

  //  {}  is a callback function
  // [] is a array function

  useEffect(() => {
    alanBtn({
      key: "1ab209f3f951a05f780bdc3932f8a29e2e956eca572e1d8b807a3e2338fdd0dc/stage",

      onCommand: ({ command }) => {
        if (command === "firstCommand") {
          alert("first command");
        }
      },
    });
  }, []);


  return (
    <>
      <div className="header">
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          <div className="header__first">
            <img
              src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png
"
              alt="flipkart logo"
            />
            <div className="header__first1">
              <span
                style={{
                  fontSize: "11px",
                  color: "white",
                  fontStyle: "italic",
                  fontWeight: "600",
                  marginRight: "2px",
                }}
              >
                Explore
              </span>
              <span
                style={{
                  fontSize: "11px",
                  color: "#ffe500",
                  fontStyle: "italic",
                  fontWeight: "600",
                  marginRight: "2px",
                }}
              >
                Plus
              </span>
              <span>
                <img
                  width="10"
                  src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
                  alt=""
                />
              </span>
            </div>
          </div>
        </Link>
        <div className="header__second">
          <input type="text" name="" id="" placeholder="Search for products" />
          <SearchIcon />
        </div>
        <div className="header__third">
          <Tippy
            content={<Login></Login>}
            //  visible={false}
            theme="light"
            interactive={true}
            offset={[5, 13]}
          >
            <button onClick={() => openDialog()}>Login</button>
          </Tippy>
        </div>
        <div className="header__third1">
          <span>Become a Seller</span>
        </div>
        <div className="header__fourth">
          <Tippy
            content={<MoreT></MoreT>}
            theme="light"
            interactive={true}
            offset={[5, 18]}
          >
            <span>More</span>
          </Tippy>
          <ExpandMoreIcon />
        </div>
        <div className="header__fifth">
          <ShoppingCartIcon />

          <span>Cart</span>
        </div>
      </div>
      <LoginDialog open={open} setOpen={setOpen} />
    </>
  );
}
