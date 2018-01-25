import React from 'react'
import PropTypes from 'prop-types'

import s from './BasicButton.scss'

export default function BasicButton({
  background, height, width, strong, span, onClick, disabled
}) {
  const styles = {
    background: BasicButton.background[background],
    height: BasicButton.height[height],
    width: BasicButton.width[width],
  }

  return (
    <button className={s.btn} style={styles} onClick={onClick} disabled={disabled}>
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
    </button>
  )
}
BasicButton.propTypes = {
  /** The color for the button */
  background: PropTypes.oneOf(['lightBlue', 'blue', 'darkBlue']),
  /** The size of the button */
  width: PropTypes.oneOf(['small', 'medium', 'large']),
  height: PropTypes.oneOf(['small', 'medium']),
  /** Disable button */
	disabled: PropTypes.bool,
	/** Gets called when the user clicks on the button */
	onClick: PropTypes.func,
}
BasicButton.defaultProps = {
  width: 'small',
  height: 'small',
  background: 'blue',
  onClick: event => {
		console.log('You have clicked me!', event.target);
	},
}
BasicButton.background = {
  lightBlue: '-webkit-linear-gradient(left, #17aed9 0%, #009ee0 100%)',
  blue: '-webkit-linear-gradient(left, #0075a7 0%, #0087c1 100%)',
  darkBlue: '-webkit-linear-gradient(left, #002d47 0%, #00547a 100%)',
}
BasicButton.width = {
  small: '200px',
  medium: '400px',
  large: '600px',
}
BasicButton.height = {
  small: '200px',
  medium: '400px',
}
