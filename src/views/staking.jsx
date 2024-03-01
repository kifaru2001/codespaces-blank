import React from 'react'

import Nav from '../components/nav2'
import './leaderboard.css'
import ShuffleText from "react-shuffle-text"

import Menu from '../components/Trans/menu'


const Leaderboard = (props) => {
  return (
    <>
    <Menu />
    <div class="blob-c">
      <div class="shape-blob"></div>
      <div class="shape-blob one"></div>
      <div class="shape-blob two"></div>
   
        <div class="shape-blob six"></div>
      </div>
    <div className="leaderboard-container">
      <div className="leaderboard-container1">
      <h1 style={{fontSize: "30px", color: "white", margin: "2%", fontWeight: "bolder", fontFamily: "monospace", textAlign: "center"}} >
  
  <ShuffleText charIncInterval="20" charFrameTime="70" charFrames="100"  content="STAKING" styles={{color: "white"}} />
  
  </h1>
      </div>
      <p style={{fontSize: "16px", color: "white"}}>Stake NFT</p>
      <div className="leaderboard-container2"></div>
      <div className="leaderboard-container3">--------COMING🐳SOON---------</div>
      <Nav></Nav>
    </div>
    </>
  )
}

export default Leaderboard
