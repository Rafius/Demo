import React from 'react'
import PropTypes from 'prop-types'

import s from './HeaderImage.scss'

export default function HeaderImage({
  alt, src, strong, span,
}) {
  src = require(`../../assets/${src}.png`)
  return (
    <div className="row">
      <button href="/">
        <div className="colg-lg-12">
          <img className={s.headerImg} alt={alt} src={src} />
        </div>
        <div className="colg-lg-12">
          <span>{span}</span>
        </div>
      </button>
    </div>
  )
}
HeaderImage.propTypes = {
  /** Img src. */
  src: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
}

HeaderImage.defaultProps = {
  src: 'caixa',
  width: '75px',
  height: '75px',
}
