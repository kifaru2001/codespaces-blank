import React from 'react'

import PropTypes from 'prop-types'

import './nav.css'
import {ArrowLeft, Discord, TelegramFill, TwitterOutline, Book, Cart, Gift, Bell} from '@web3uikit/icons'
import {Arrow} from '@web3uikit/icons'

import { Link } from 'react-router-dom'
import { ConnectWallet } from '@thirdweb-dev/react'




const Nav = (props) => {
  return (
    <div className="nav-container">
      <div className="nav-container1">
      <Link to="/leaderboard" className="nav-navlink">
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
       <a   href='https://discord.gg/2Gp6tUxa'><Discord fontSize="30px" /></a>   
       <a   href='/'> <TelegramFill fontSize="30px" /></a>
       <a   href='https://twitter.com/bored_workshop'><TwitterOutline fontSize="30px" /></a>
       <a   href='https://docs.boredwhalesyachtclub.org'><Book fontSize="30px" /></a>
         <a   href='https://rarebay.xyz'><Cart fontSize="30px" /></a>
         <a   href='https://token.boredwhalesyachtclub.org'> <Gift fontSize="30px" /></a>
         <a   href='#'><Bell fontSize="30px" /></a>
         </div>
       
      </div>
      <Link to="/join" className="nav-navlink">
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
