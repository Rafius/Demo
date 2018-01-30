import React from 'react'
import BasicButton from '../components/BasicButton/BasicButton'
import HeaderButton from '../components/HeaderButton/HeaderButton'
import HeaderImage from '../components/HeaderImage/HeaderImage'

const header = () => (
  <div className="row">
    <div className="col-md-4 m-2">
      <HeaderImage/>
    </div>
    <div className="col-md-4 m2">
      <BasicButton/>
    </div>
    <div className="col-md-4 m2">
      <HeaderButton src="exit" strong="Salida" span="Retirar Tarjeta"/>
      <HeaderButton src="helper" strong="Ayuda" span="Buscador"/>
    </div>
  </div>
)


export default header
