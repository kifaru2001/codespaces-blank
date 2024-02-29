import React from 'react'

import Nav from '../components/nav1'
import './leaderboard.css'
import ShuffleText from "react-shuffle-text"
import Menu from '../components/Trans/menu'
import "../components/Trans/hero.scss" 
import Slider from '../components/slider'
import "../components/button.scss"
import Chart from '../components/chart'
import Mint from '../components/mint'


const Leaderboard = (props) => {
  return (
    <>
     <Menu />
     <Mint />
     <div class="blob-c">
      <div class="shape-blob"></div>
      <div class="shape-blob one"></div>
      <div class="shape-blob two"></div>
      <div class="shape-blob three"></div>
   
      </div>
    <div className="leaderboard-container">
     
      <div className="leaderboard-container1">
      <h1 style={{fontSize: "30px", color: "white", margin: "2%", fontWeight: "bolder", fontFamily: "monospace", textAlign: "center"}} >
  
  <ShuffleText charIncInterval="20" charFrameTime="70" charFrames="100"  content="MEMBERSHIP" styles={{color: "white"}} />
  
  </h1>
      </div>
      <p style={{fontSize: "16px", color: "white"}}>Join the Club</p>
      
      <div className="leaderboard-container2"></div>
      
      <div className="leaderboard-container3">
    
        <div style={{zIndex: "1"}}> </div>
      
      </div>
      <Nav></Nav>
    </div>
    <div class="overlay"></div>
    </>
  )
}

export default Leaderboard
