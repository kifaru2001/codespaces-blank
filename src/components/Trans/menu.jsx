import "./hero.scss"
import React from "react";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


function Menu() {
    return (
        <div class="main">
        <label class="menu-button-wrapper" for="">
   <input type="checkbox" class="menu-button" />
   <div class="icon-wrapper">
     <label class="hamburger">
       <input class="hamburger-input" type="checkbox" />
       <span class="hamburger-line first"></span>
       <span class="hamburger-line second"></span>
       <span class="hamburger-line third"></span>
     </label>
   </div>
   
   <div class="item-list">

    <div style={{display: "flex"}}><img width={30} src="/icon.png" /> <Link to="/Leaderboard">Leaderboard</Link></div> 
    <div style={{display: "flex"}}><img width={30} src="/ic.png" /> <Link to="/Roadmap">Roadmap</Link></div> 
    <div style={{display: "flex"}}><img width={30} src="/icc.png" /> <Link to="/staking">Staking</Link></div> 

    <div style={{display: "flex"}}><img width={30} src="/ic2.png" /> <Link to="/join">Membership</Link></div> 
    <div style={{display: "flex"}}><img width={30} src="/1c1.png" /> <Link to="/">FAQ</Link></div> 
   </div>
 </label>
</div>
    )
}

export default Menu;