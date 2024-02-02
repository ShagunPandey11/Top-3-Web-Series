import React from 'react'
import './index.css'
import Heading from './Heading'
function Card(props){
    return (
        <div className='cards'>
          <div className='card'>
            <img src={props.imgsrc} alt='img' className='imggg'/>
            <div className='card-info'>
            <span className='card-category'> {props.category}</span>
            <Heading title={props.title}/>
            <a href={props.link} target={'_blank'}><button>More about this...</button> </a>
            </div>
          </div>
        </div>
    )
  }

export default Card;