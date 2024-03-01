import React from 'react'

import PropTypes from 'prop-types'

import './grid.css'

const Grid = (props) => {
  return (
    <div className={`grid-container ${props.rootClassName} `}>
      <div className="grid-container1">
        <div className="grid-container2">
          <h1 className="">{props.heading}</h1>
        </div>
        <div className="grid-container3">
          <h1 className="">{props.heading1}</h1>
        </div>
      </div>
    </div>
  )
}

Grid.defaultProps = {
  rootClassName: '',
  heading: 'Heading',
  heading1: 'Heading',
}

Grid.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  heading1: PropTypes.string,
}

export default Grid
