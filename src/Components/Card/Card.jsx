import React from 'react'
import {containerCard} from './Card.module.css'

function Card({usuario}) {
  return (
    <>
    <div className={containerCard}>
      <h1>Hola!</h1>
      <div>Es un gusto verte <b>{usuario}</b>, de nuevo por aqui !</div>
        <button className='btn btn-primary' onClick={()=>{window.location.href = '/'}}> Salir</button>
    </div>
 
    </>
  )
}

export default Card