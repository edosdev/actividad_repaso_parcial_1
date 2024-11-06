import React from 'react'
import {containerCard} from './Card.module.css'

function Card() {
  return (
    <div className={containerCard}>
      <h1>Titulo</h1>
      <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore incidunt asperiores aliquam excepturi quibusdam perferendis porro. Molestias a inventore quisquam saepe quasi praesentium atque ex pariatur. Nostrum tenetur vitae ipsa!</div>
      <button>Selecionar</button>
    </div>
  )
}

export default Card