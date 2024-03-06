import React from 'react'

import PropTypes from 'prop-types'

import './grid.css'
import Slider from './slider'

const Grid = (props) => {
  return (
    <div className={`grid-container ${props.rootClassName} `}>
      <div className="grid-container1">
        <div className="grid-container2">
          <p className="">Launchpad</p>
          <p style={{fontSize: "10px", fontStyle: "italic", fontWeight: "400"}}>Season 2 Price is not fixed in public launchpad</p>
          <Slider />
        </div>
        <div className="grid-container3">
          <p className="">{props.heading1}</p>
        </div>
      </div>
    </div>
  )
}

Grid.defaultProps = {
  rootClassName: '',
  heading: 'Launchpad',
  heading1: 'Heading',
}

Grid.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  heading1: PropTypes.string,
}

export default Grid
