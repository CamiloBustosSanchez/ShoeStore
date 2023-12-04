import './ButtonAdd.css'

import React from 'react'

const ButtonAdd = () => {
  return (
    <button onClick={buy}>Comprar</button>
  )
}

export default ButtonAdd

function buy (){
    alert("Se agrego al carrito correctamente.")
}