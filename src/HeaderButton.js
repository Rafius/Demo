import React from 'react'
import PropTypes from 'prop-types'

import s from './HeaderButton.scss'

export default function HeaderButton({
  alt, src, strong, span,
}) {
  src === 'helper' ? src = require('../../assets/helper.png')
   : src = require('../../assets/exit.png')
  return (
    <button className={s.btn}>
      <div className="col-lg-12">
        <img alt={alt} src={src} />
      </div>
      <div className="col-lg-12">
        <strong className="strong">
          {strong}
        </strong>
      </div>
      <div className="col-lg-12">
        <span className="span">
          {span}
        </span>
      </div>
    </button>
  )
}
HeaderButton.propTypes = {
  /** Img src. */
  src: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  /** Text Above Img. */
  strong: PropTypes.string,
  span: PropTypes.string,
}

HeaderButton.defaultProps = {
  src: 'exit',
  width: '75px',
  height: '75px',
  strong: 'Test',
  span: 'test',
  alt:'texto prueba'
}
