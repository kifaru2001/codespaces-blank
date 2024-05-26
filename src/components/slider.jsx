import { useEffect, useState } from "react";
import "./slider.scss"
import "../components/button.scss"
import Cards from "./cards";
import Chart from "./chart";
import { Web3Button } from "@thirdweb-dev/react";
import { useClaimNFT, useTotalCirculatingSupply, useContract } from '@thirdweb-dev/react'


export default function Slider() {
  const [input, setInput] = useState("1")
  const { contract } = useContract("0xF6C2584850Fd1F50fc979F72888Fb67CFa39a2C2");
  const { data: sup, isLoading, error } = useTotalCirculatingSupply(contract);


    return(
        <>
 <div style={{justifyContent: "center", display: "flex", flexDirection: "column"}}>
 { isLoading ? (
<>
<div
style={{marginTop: "1%"}}
className="spinner" />
</>
  )
: (
<>
<p style={{margin: "1%", fontSize: "18px", textAlign: "center", marginTop: "2%", color: "skyblue"}}>Minted: {sup?.toNumber()} / 10,000</p>
</>
)  
}

 

        <span id="rangeValue">Amount: {input} 🐋</span>
        <span style={{color: "gray", fontSize: "16px", textAlign: "center", padding: "1%"}} >Price: {(input * 1.25)} CORE</span>
        <input class="range" type="range"    value={input} 
           onChange={(e) => setInput(e.target.value)} min="1" max="100"/>
    </div>
   <div className="box" style={{marginTop: "5%"}}>
   <Web3Button
    style={{
      backgroundColor: "transparent",
      width: "auto",
      display: "flex",
      alignItems: "center",
      height: "auto",
      fontSize: "14px",
      color: "white"
    }}
        contractAddress={"0xF6C2584850Fd1F50fc979F72888Fb67CFa39a2C2"}
        action={(contract) => contract.erc721.claim(input)}
        onSuccess={() => {
          alert("NFT Claimed!");
        }}
        onError={(error) => {
          alert(error);
        }}
      >
        Claim An NFT
      </Web3Button>
   </div>
   <div style={{height: "200px"}}></div>
        </>
    )
}
