import React from 'react'
import PropTypes from 'prop-types'

import s from './HeaderImage.scss'

export default function HeaderImage({
  alt, src, strong, span,
}) {
  src = require(`../../assets/${src}.png`)
  return (
    <img className={s.headerImg} alt={alt} src={src} />
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
