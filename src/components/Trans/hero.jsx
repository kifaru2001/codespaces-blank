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
  <div style={{display: "flex", flexDirection: "column"}}>
<div style={{borderRadius: "100%", justifyContent: "center", display: "flex", zIndex: "1", paddin: "1%"}}>
<Cards />
</div>
  <h1 >
   
  <ShuffleText charIncInterval="100" charFrameTime="70" charFrames="50"  content="BORED WHALES YACHT CLUB" styles={{color: "white"}} />

  </h1>
  <h2>
  <ShuffleText charIncInterval="800" content="SEASON 2" />
  </h2>
  <h3>
  <ShuffleText charIncInterval="300" content="IMMUTABLE, DECENTRALIZED, SECURE" />
  </h3>

  <div style={{justifyContent: "center", display: "flex"}}>
    
  <Btn />
  </div>
  <Nav /> 
  </div>

</div>

</>
  );
}

export default Home;
