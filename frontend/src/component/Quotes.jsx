import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Quotes(props) {
  let navigate = useNavigate();
  // function showquoteHadler(id) {
  //   navigate(`/quotes/${id}`)
  // }


  return (

    <div className='quote-card border rounded mb-3 ' >
      <div className='row p-3 '>
        <div className='col-2 d-flex justify-content-center align-item-center'>
          <img src="https://th.bing.com/th/id/R.90f7be599167f20b9607c40b0e3c35e8?rik=cGZOqx3VEP8U3Q&riu=http%3a%2f%2fwww.guinnessworldrecords.com%2fImages%2fOldest-living-person-header_tcm25-453043.jpg&ehk=jYfw3wSfKFysAPBxUTjX0opVlXTyqZPTcm9UdZLzvVw%3d&risl=&pid=ImgRaw&r=0" />
        </div>
        <div className='col-10'>
          <p>" {props.quote} "</p>
          <p><b>~{props.author}</b></p>
        </div>
        <hr />
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12 '>
            <div className='quote-tag'>Tags:- <Link style={{ textDecoration: "none" }} to={`tag/${props.tag}`}>{props.tag}</Link> </div>
            <div className='quote-topic'>Topic:- <Link style={{ textDecoration: "none", color: "black", fontWeight: "bold", fontSize: "12px" }} to={`tag/${props.topic}`}>{props.topic}</Link> </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 '>
            <p className='quote-link-p text-end'>
              <Link target='_blank' to={`${props.facebook}`} className='quote-link' ><i className="fa-brands fa-facebook"></i></Link>
              <Link target='_blank' to={`${props.instagram}`} className='quote-link' ><i className="fa-brands fa-square-instagram"></i></Link>
              <Link target='_blank' to={`${props.twitter}`} className='quote-link' ><i className="fa-brands fa-twitter"></i></Link>
            </p>
          </div>
        </div>



      </div>
    </div>

  )
}

export default Quotes
