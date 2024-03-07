import React from 'react'

import { Helmet } from 'react-helmet'

import './not-found.css'
import "../components/Trans/hero.scss"
import "../components/Trans/menu"

const NotFound = (props) => {
  return (
    <div className="not-found-container">
    
      <div class="blob-c">
	<div class="shape-blob"></div>
	<div class="shape-blob one"></div>
	<div class="shape-blob two"></div>
	<div class="shape-blob three"></div>
    <div class="shape-blob four"></div>
    <div class="shape-blob five"></div>
    <div class="shape-blob six"></div>
	</div>
      <Helmet>
        <title>404 - Not Found</title>
      </Helmet>
      <div className="not-found-container1">
        <h1 className="not-found-text1">404</h1>
      </div>
      <div className="not-found-container2">
        <h2 className="not-found-text2">
         OOPS!!
        </h2>
      </div>
    </div>
  )
}

export default NotFound
