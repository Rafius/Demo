import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'

import s from './ImgButton.scss'

export default function ImgButton({
  src, width, height, alt, background, color, strong, span, float, sideIcon
}) {
  if(src === 'helper'){
    src = require('../../assets/helper.png')
  }else if(src === 'exit'){
    src = require('../../assets/exit.png')
  }else if(src === 'caixa'){
    src = require('../../assets/caixa.png')
  }else if(src === 'arrow-left'){
    src = require('../../assets/arrow-left.svg')
  }else if(src === 'arrow-right'){
    src = require('../../assets/arrow-right.svg')
  }
  const stylesIMG = {
    float: float,
  }
  if(sideIcon){
    return (
      <Button src={src} width={width} height={height} strong={strong} span={span}
        background={background} color={color}>
         <img className="imgNavigation" alt={alt} src={src} style={stylesIMG}/>
      </Button>
    )
  }else{
    return (
      <Button src={src} width={width} height={height} strong={strong} span={span}
        background={background} color={color}>
        <hr/>
        <div><span>hola</span></div>
      </Button>
    )
  }
}
ImgButton.propTypes = {
  /** Img src. */
  src: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  atl: PropTypes.string,
  /** Text Above Img. */
  background: PropTypes.string,
  color: PropTypes.string,
  strong: PropTypes.string,
  span: PropTypes.string,
  float: PropTypes.string,
  sideIcon: PropTypes.string,
  onClick: PropTypes.func
}

ImgButton.defaultProps = {
  src: 'exit',
  width: 'medium',
  height: 'small',
  onClick: event => {
   console.log('You have clicked me!', event.target);
 }
}
