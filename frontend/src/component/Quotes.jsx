import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Quotes(props) {

  return (
    <div>
      <div className=' w-50 mx-auto quote-card'>
        <p className='quote-card-text'>
          "{props.quote}"
        </p>
        <p className='quote-card-author'>
          <small>~{props.author}</small>
        </p>
        <p className='quote-card-social-link text-center'>
          <Link target='_blank' to={`${props.facebook}`} className='quote-icon' ><i className="fa-brands fa-facebook"></i></Link>
          <Link target='_blank' to={`${props.instagram}`} className='quote-icon' ><i className="fa-brands fa-square-instagram"></i></Link>
          <Link target='_blank' to={`${props.twitter}`} className='quote-icon' ><i className="fa-brands fa-twitter"></i></Link>
        </p>
        <div className='text-start '>
          <span style={{ color: "gray", fontSize: "small" }}>Tags:
            {props.tag.map((arr, index) => {
              return (<Link key={index} className='quote-link' to={`tag/${arr}`}>{arr} </Link>)
            })}
          </span>
        </div>
        <div className='text-start'>
          <span style={{ color: "gray", fontSize: "small" }}>topic: {props.topic}</span>
        </div>

      </div>
    </div>
  )
}

export default Quotes
