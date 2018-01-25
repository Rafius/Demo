import React from 'react'
import BasicButton from '../components/BasicButton/BasicButton'
import HeaderButton from '../components/HeaderButton/HeaderButton'

const container = () => (
  <div className="row container">
    <div className="col-sm-12 text-center">
      <BasicButton strong="test" span="test" />
      <HeaderButton />
      <button>
        boton
      </button>
    </div>
  </div>
)


export default container
