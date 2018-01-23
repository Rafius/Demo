import React from 'react'
// import PropTypes from 'prop-types'

import s from './Button.scss'

export default function Button({
  color, size, span1, span2,
}) {
  const styles = {
    color,
    fontSize: Button.sizes[size],
  }

  return (
    <button className={s.btn} style={styles}>
      <div className="col-md-12">
        <strong>
          {span1}
        </strong>
      </div>
      <div className="col-md-12">
        <span>
          {span2}
        </span>
      </div>
    </button>
  )
}
// Button.propTypes = {
//   children: PropTypes.string.isRequired,
//   color: PropTypes.string,
//   size: PropTypes.oneOf(['small', 'medium']),
//   height: PropTypes.oneOf(['small', 'medium', 'large']),
// }
Button.defaultProps = {
  color: '#FFF',
  size: 'medium',
}
Button.sizes = {
  small: '15px',
  medium: '23px',
}
Button.height = {
  small: '25px',
  medium: '40px',
  large: '50px',
}
