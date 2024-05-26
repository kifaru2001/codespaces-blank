import React from 'react'

import PropTypes from 'prop-types'

import './mint.css'
import { useContract, useContractEvents } from "@thirdweb-dev/react";

const Mint = (props) => {
  const { contract } = useContract("0x795a97699a235D3E4721B163CB4F7b5468455B95");
  // You can get a specific event
  const { data: event } = useContractEvents(contract, "TokensStaked")

  return (
    <div className={`mint-container ${props.rootClassName} `}>
      <div className="mint-container01">
        <div className="mint-container02"></div>
        <div className="mint-container03"><p style={{textAlign: "start"}}>Season II</p>
        <p style={{fontSize: "14px", justifyContent: "start", margin: "5px"}}>Season2 Intorduces NEW characters, Specs and Metadata Upgrades.</p>
        </div>
        <div className="mint-container04">
          <div className="mint-container05"><p style={{textAlign: "start", fontSize: "20px"}}>Season II</p>
          <p style={{fontSize: "19px", justifyContent: "start", position: "absolute", marginTop: "6%", textAlign: "start", width: "40%"}}>Season2 Intorduces NEW characters, Specs and Metadata Upgrades. Mint Whale to get started.</p>
          </div>
          <div className="mint-container06">
            <div className="mint-container07">
              <span className="mint-text">STAKED</span>
              <span className="mint-text1" style={{fontSize: "14px", color: "orange"}}>{event?.length - 17}</span>
            </div>
            <div className="mint-container08">
              <span className="mint-text2">TVL</span>
              <span className="mint-text3" style={{fontSize: "14px", color: "green"}}>+{(event?.length - 17) * 1.25} CORE</span>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}

Mint.defaultProps = {
  text3: 'Staked',
  heading1:
    '10,000 PFP Born on CORE. Stake to earn WHLS, use as avatars, get discord roles.',
  text22: '--',
  rootClassName: '',
  text13: 'UNCLAIMED',
  text34: 'Staked',
  text224: '--',
  text35: 'TVL',
  text225: '--',
  text: 'BoredWhales Season II',
}

Mint.propTypes = {
  text3: PropTypes.string,
  heading1: PropTypes.string,
  text22: PropTypes.string,
  rootClassName: PropTypes.string,
  text13: PropTypes.string,
  text34: PropTypes.string,
  text224: PropTypes.string,
  text35: PropTypes.string,
  text225: PropTypes.string,
  text: PropTypes.string,
}

export default Mint
