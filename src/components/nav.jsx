import React from 'react'

import PropTypes from 'prop-types'

import './nav.css'
import {ArrowLeft} from '@web3uikit/icons'
import {Arrow} from '@web3uikit/icons'

import { Link } from 'react-router-dom'
import { ConnectWallet } from '@thirdweb-dev/react'
import { useContract, useContractRead, useAddress,  useTokenBalance } from "@thirdweb-dev/react";



const Nav = (props) => {
  const address = useAddress();
  const { contract, isLoading: load } = useContract("0x3A202eE3e212C2884e9eC7001488caF14119754e");
  const { contract: contr } = useContract("0xe280766d22517626A17944Fe11380f13EFf711AD");
  const { data: bal } = useTokenBalance(contract, address);
  const { data: bal2 } = useTokenBalance(contr, address);
  return (
    <div className="nav-container">
      <div className="nav-container1">
      <Link to="/staking" className="nav-navlink">
        <div className="nav-container2">
        <div class="arrow">
        <span></span>
        <span></span>
        <span></span>
    </div>
        </div>
        </Link>
      </div>
      <div className="nav-container3">
      <div className="nav-container4">
          <div className='box' style={{height: "80px", backdropFilter: "blur(50px)", background: "rgba(200, 200, 200, 0.2)", minWidth: "250px", border: "solid gray 0px", borderRadius: "10px", padding: "2%", display: "flex", flexDirection: "column"}}>
<p style={{fontSize: "14px", color: "gray", borderBottom: "solid 0px gray", width: "100%", margin: "1%", padding: "1%"}}>Your Ecosystem Balance</p>
<div style={{fontSize: "14px", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>{
  load ? (
    <>
     <div style={{
            justifyContent: "center", display: "flex"
            }} className='spinner' />
    </>
  ) : (
    <div style={{flexDirection: "column", textAlign: "start"}}>
    <p>🐋WHLS: {bal?.displayValue || 0.0}</p>
    <p>⚡RARE: {bal2?.displayValue || 0.0}</p>
    </div>
  )
}</div>
        </div>
        </div>
      <div className="box">
        <ConnectWallet 
       theme={({
        colors: {
          accentText: "gray",
          accentButtonBg: "rgba(0, 0, 0, 0.9)",
          modalBg: "rgba(0, 0, 0, 0.9)",
          dropdownBg: "rgba(0, 0, 0, 1)",
          separatorLine: "rgba(0, 0, 0, 0)",
          secondaryText: "white",
          primaryText: "gray",
          secondaryButtonText: "white",
          primaryButtonText: "white",
          borderColor: "rgba(0, 0, 0, 0)",
        },
      })}
      btnTitle={"CONNECT WALLET"}
      modalSize={"compact"}
      modalTitleIconUrl={""}
      showThirdwebBranding={false}
      
      style={{height: "30px", alignItems: "center", justifyContent: "center", color: "white", padding: "2%"}}

 

      />
        </div>
       
     
      </div>
      <Link to="/roadmap" className="nav-navlink">
      <div className="nav-container6">
      <div class="arrow2">
        <span></span>
        <span></span>
        <span></span>
    </div>
      </div>
      </Link>
    </div>
  )
}

Nav.defaultProps = {
  heading: 'PREV',
  heading1: 'NEXT',
  button: 'Button',
  button1: 'Button',
}

Nav.propTypes = {
  heading: PropTypes.string,
  heading1: PropTypes.string,
  button: PropTypes.string,
  button1: PropTypes.string,
}

export default Nav
