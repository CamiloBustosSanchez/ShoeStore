import React from 'react'
import './ShoeContainer.css'
import Shoe from './Shoe'

var show = false;

const ShoeContainer = (props) => {
  const photo  = '././img/'+props.name
  return (
    <div>
      <div className='products__containerUno'>
        <div > 
          <img className='Product__Img' id = 'imgselected'/>
          <input className='Product__ImgName' id = 'nameselected' />
          <div>
            <input id = 'priceselected' className='Product__Selected' />
            <input id = 'referencedelected' className='Product__Selected' />
            <input id = 'descriptionselected' className='Product__Selected'/>
          </div>
        </div>
        
      </div>
      <section className='shoes__section'>
          <h1 className='shoes__title'>Lista de productos.</h1>
          <div className='products__container'>
              {props.children}
          </div>
      </section>
    </div>
  )
}



export default ShoeContainer