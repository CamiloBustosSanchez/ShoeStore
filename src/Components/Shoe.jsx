import ButtonAdd from './ButtonAdd';
import './Product.css'
import React from 'react';
import { motion } from "framer-motion"


var name = "";
const Shoe = (props) => {
  const photo  = '././img/'+props.photo
  return (
    
    <motion.div  className='Product' dragConstraints={{right: 0 }} drag = 'x'>
      {
        name = props.name
      }
      <motion.div>
        <img className='Product__Img' src= {photo} alt='Shoe' onClick={event => uno(event, props)}/>

        <h3 className='Product__ImgName'>{props.name}</h3>
        <div className='Product__Datail'>
          <h5>Price: {props.price}</h5>
          <h5>Reference: {props.reference}</h5>
        </div>
        <ButtonAdd/>
        </motion.div>
    </motion.div>
  )
}


 function uno (event,props) {
  
  var dom = document.getElementById('imgselected');
  dom.src = '././img/'+props.photo;
  dom = document.getElementById('nameselected');
  dom.value= props.name;
  dom = document.getElementById('priceselected');
  dom.value= 'Price: '+props.price;
  dom = document.getElementById('referencedelected');
  dom.value= 'Reference: '+props.reference;
  dom = document.getElementById('descriptionselected');
  if (props.description == null){
    dom.value= 'Producto sin Description.';
  }else{
    dom.value= 'Description: '+props.description;
  }
  
  


 }
export default Shoe