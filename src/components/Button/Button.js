import React from 'react'
import PropTypes from 'prop-types'

import s from './Button.scss'

export default function Button({
   height, width, strong, span, onClick, disabled, background, children, color
}) {
  const styles = {
    height: Button.height[height],
    width: Button.width[width],
    background: Button.background[background],
    color: Button.color[color]
  }
  return (
    <button className={s.btn} style={styles} onClick={onClick} disabled={disabled}>
      <div className="row">
        <div className="col-md-12">
           {children}
        </div>
        <div className="col-md-12">
          <strong className="strong">
            {strong}
          </strong>
        </div>
        <div className="col-md-12">
          <span className="span">
            {span}
          </span>
        </div>
      </div>
    </button>
  )
}
Button.propTypes = {
  /** The color for the button */
  background: PropTypes.oneOf(['lightBlue', 'blue', 'darkBlue','orange','green','white']),
  /** The size of the button */
  width: PropTypes.oneOf(['xsmall','small','medium','large','xlarge']),
  height: PropTypes.oneOf(['xsmall','small','medium','large']),
  /** Color button**/
  color: PropTypes.oneOf(['white','black']),
  /** Disable button */
	disabled: PropTypes.bool,
	/** Gets called when the user clicks on the button */
	onClick: PropTypes.func
}
Button.defaultProps = {
  width: 'medium',
  height: 'medium',
  background: 'white',
  color: 'white',
  onClick: event => {
		console.log('You have clicked me!', event.target);
	}
}
Button.background = {
  lightBlue: '-webkit-linear-gradient(left, #17aed9 0%, #009ee0 100%)',
  blue: '-webkit-linear-gradient(left, #0075a7 0%, #0087c1 100%)',
  darkBlue: '-webkit-linear-gradient(left, #002d47 0%, #00547a 100%)',
  orange: '-webkit-linear-gradient(left, #c9922d 0%, #f8b334 100%)',
  green: '-webkit-linear-gradient(left, #749513 0%, #97bf0d 100%)',
  white: 'white'
}
Button.width = {
  xsmall: '50px',
  small: '100px',
  medium: '200px',
  large: '400px',
  xlarge: '600px'
}
Button.height = {
  xsmall: '50px',
  small: '100px',
  medium: '200px',
  large: '400px',
}
Button.color = {
  white: '#FFF',
  black: '#000000'
}
