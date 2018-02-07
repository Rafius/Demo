import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'

import s from './PinPad.scss'

export default function PinPad({
   width, height, background, color, strong, span
}) {
    const renderPinPad = () =>{
      const pinPad = [0,1,2,3,4,5,6,7,8,9]
      const pinPadlist = pinPad.map((index,pinPad)=>
          <div className="col-md-3">
            <Button width={width} height={height} strong={pinpad[index]}
              background={background} color={color}/>
          </div>
      )
      return(
        <div className="row">
          {pinPadlist}
          {/* <Button width={width} height={height} strong={pinpad}
            background={'orange'} color={color}/> */}
        </div>
      )
    }
    return (
      <div className="row">
        {renderPinPad()}
      </div>
    )
  }
PinPad.propTypes = {
  /** Img src. */
  width: PropTypes.string,
  height: PropTypes.string,
  /** Text Above Img. */
  background: PropTypes.string,
  color: PropTypes.string,
  strong: PropTypes.string,
  onClick: PropTypes.func
}

PinPad.defaultProps = {
  width: 'xmall',
  height: 'xmall',
  background: 'blue',
  onClick: event => {
   console.log('You have clicked me!', event.target);
 }
}
