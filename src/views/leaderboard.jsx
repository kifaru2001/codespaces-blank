import React from 'react'

import Nav from '../components/nav'
import './leaderboard.css'
import ShuffleText from "react-shuffle-text"
import Menu from '../components/Trans/menu'
import Leads from '../components/leaders'


const Leaderboard = (props) => {
  return (
    <>
    <Menu />
    <div class="blob-c">
      <div class="shape-blob"></div>
    
        <div class="shape-blob four"></div>
        <div class="shape-blob five"></div>
        <div class="shape-blob six"></div>
        <div class="shape-blob one"></div>
        <div class="shape-blob two"></div>
      </div>
    <div className="leaderboard-container">
      <div className="leaderboard-container1">
      <h4 style={{fontSize: "30px", color: "white", margin: "2%", fontWeight: "bolder", fontFamily: "monospace", textAlign: "center"}} >
  
  <ShuffleText charIncInterval="20" charFrameTime="70" charFrames="50"  content="LEADERBOARD" styles={{color: "white"}} />
  
  </h4>
 
      </div>
      <p style={{fontSize: "16px", color: "white"}}>Rank by ownership</p>
      <div className="leaderboard-container2">
        
      </div>
      <div className="leaderboard-container3">
      <Leads />
      </div>
      
      <Nav></Nav>
    </div>
    </>
  )
}

export default Leaderboard
