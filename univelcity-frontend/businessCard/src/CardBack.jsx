import React from 'react'
import { BsArrowRepeat} from 'react-icons/bs'
import image from './assets/backk.jpg'


export default function CardBack({handleBack}) {
  return (
      <div className="card-back">
        <button className='flipbtn' onClick={handleBack} ><BsArrowRepeat /></button>
        <img src={image} alt="backview" />
      </div>
  )
}
