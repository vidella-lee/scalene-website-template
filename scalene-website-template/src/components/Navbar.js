import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){

      return(
        <nav class="site-navbar navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"#293e40"}}>
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
          <svg class="nav-logo" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 117 117">
            <defs>
                <clipPath id="clip-path">
                    <circle id="Ellipse_1" data-name="Ellipse 1" cx="58.5" cy="58.5" r="58.5" transform="translate(886 130)" fill="#fff"/>
                </clipPath>
            </defs>
            <g id="Mask_Group_7" data-name="Mask Group 7" transform="translate(-886 -130)" clip-path="url(#clip-path)">
                <g id="temp_formal-3132AE3231AE32_temp" transform="translate(884.078 127.989)">
                    <path id="Path_21" data-name="Path 21" d="M60.415,119.011a15.048,15.048,0,0,1-12.634-6.888L9.448,52.822a15.053,15.053,0,1,1,25.286-16.34L60.415,76.233,81.357,43.862l.041-.07.014-.015,4.7-7.283A15.053,15.053,0,0,1,111.4,52.834L79.526,102.155h-.014a.06.06,0,0,0-.012.02.056.056,0,0,0,0,.024s-.015,0-.015.012l-.014.014-6.4,9.905a15.059,15.059,0,0,1-12.651,6.88Z" fill="#fff"/>
                    <path id="Path_22" data-name="Path 22" d="M60.415,39.535A18.775,18.775,0,0,1,44.712,10.5h.014a.046.046,0,0,0,.014-.029,18.893,18.893,0,0,1,7.95-6.8.111.111,0,0,0,.043-.015h.015a18.5,18.5,0,0,1,7.665-1.645,18.749,18.749,0,0,1,12.89,32.371V34.4l-.027.029a18.734,18.734,0,0,1-9.214,4.742h-.029a17.992,17.992,0,0,1-3.621.367Z" fill="#fff"/>
                </g>
            </g>
        </svg>
        BusinessName
        </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" to="/about-us">About Us</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/pricing">Pricing</Link>
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pages
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link class="dropdown-item" to="#">Action</Link></li>
                  <li><Link class="dropdown-item" to="#">Another action</Link></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><Link class="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/blog" tabindex="-1">Blog</Link>
              </li>
              </ul>
           
            <ul class="navbar-nav ms-5">
                <li class="nav-item ">
                    <Link class="nav-link" to="login" tabindex="-1"><b>Login</b></Link>
                </li>
            </ul>
          </div>
          
        </div>
      </nav>
      )  
    
   
}