import ShuffleText from 'react-shuffle-text';
import "./hero.scss"
import React from "react";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Menu from './menu';
import Btn from './button';
import Cards from '../cards';
import Social from "../social"
import Foot from '../Footer';
import Nav from '../nav3';

function Home() {
  return (
    <>
 <Menu />

    <div class="container">

      
	<div class="blob-c">
	<div class="shape-blob"></div>
	<div class="shape-blob one"></div>
	<div class="shape-blob two"></div>
	<div class="shape-blob three"></div>
    <div class="shape-blob four"></div>
    <div class="shape-blob five"></div>
    <div class="shape-blob six"></div>
	</div>
  <div style={{width: "100%", display: "flex", padding: "10%", borderBottom: "rgba(50, 50, 50, 0.25) 1px solid"}} className="flx">
    <div style={{width: "80%", display: "flex", flexDirection: "column"}} className="cds" >
      
  <h1 style={{fontSize: "1.1em"}} className="hdd">
   
   <ShuffleText charIncInterval="100" charFrameTime="70" charFrames="50"  content="BORED WHALES" styles={{color: "white"}} />
 
   </h1>
   <h1 style={{fontSize: "1.1em", marginTop: "-2%", fontWeight: "100"}} className="hdd">
   
   <ShuffleText charIncInterval="100" charFrameTime="70" charFrames="50"  content="YACHT CLUB" styles={{color: "white"}} />
 
   </h1>



   <p style={{padding: "2%", width: "65%", fontSize: "16px", fontStyle: "italic", marginTop: "-3%"}} className="cds">
   <ShuffleText charIncInterval="10" content="IMMUTABLE, DECENTRALIZED, SECURE NFTs. Whales are decentralized and Bitcoin Hash powered on CORE, Season 2 introduces new characters and capabilities. Mint to get started" />
   </p>
   <h2 style={{padding: "2%", marginTop: "-3%", fontSize: "1.5em", fontStyle: "normal"}}>
   <ShuffleText charIncInterval="800" content="SEASON 2" />
   </h2>
   <div style={{justifyContent: "start", display: "flex", padding: "2%"}}>
     
   <Btn />
   </div>

    </div>
    <div style={{width: "20%", display: "flex", flexDirection: "column"}} className="cds">
    <div style={{borderRadius: "100%", justifyContent: "center", display: "flex", zIndex: "1", paddin: "5%", marginLeft: "-100%"}} className='cd'>
<Cards />
</div>
    </div>
  </div>
  <div>

 
  </div>
  <Nav /> 
</div>

</>
  );
}

export default Home;
