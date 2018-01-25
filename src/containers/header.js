import React from 'react'
import HeaderButton from '../components/HeaderButton/HeaderButton'
import HeaderImage from '../components/HeaderImage/HeaderImage'

const header = () => (
  <div className="row">
    <div className="col-md-12">
      <HeaderImage/>
      <span>Text</span>
      <HeaderButton src="exit" strong="Salida" span="Retirar Tarjeta"/>
      <HeaderButton src="helper" strong="Ayuda" span="Buscador"/>
    </div>
  </div>
)


export default header
