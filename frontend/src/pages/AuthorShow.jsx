import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from "axios";

function AuthorShow() {
  let [quote, setQuote] = useState([]);
  const navigate=useNavigate();

  const params = useParams();
  console.log(params)

  useEffect(() => {
    async function fetchAuthor() {
      try {
        let res = await axios.get(`http://localhost:8080/authors/${params.author}`);
        console.log(`Authorshow.jsx api are successfully work `);
        setQuote(res.data)
      } catch (e) {
        console.log(`Author show api not working error:- ${error}`)
      }
    }
    fetchAuthor()
  }, [])
  // function showtag(tag) {
  //   navigate(`/quote/${tag}`)
  // }
function showTag(tag){
  navigate(`/quotes/${tag}`)
}

  return (
    <div className='container'>
      {quote.map((quote, index) => {
        return (
          <div key={quote._id}>
            <div className=' w-50 mx-auto quote-card'>
              <p className='quote-card-text'>
                "{quote.quote}"
              </p>
              <p className='quote-card-author'>
                <small>~{quote.author}</small>
              </p>
              <p className='quote-card-social-link text-center'>
                <Link target='_blank' to={`#`} className='quote-icon' ><i className="fa-brands fa-facebook"></i></Link>
                <Link target='_blank' to={`#`} className='quote-icon' ><i className="fa-brands fa-square-instagram"></i></Link>
                <Link target='_blank' to={`#`} className='quote-icon' ><i className="fa-brands fa-twitter"></i></Link>
              </p>
              <div className='text-start '>
                <span style={{ color: "gray", fontSize: "small" }}>Tags:
                  {quote.tag.map((arr, index) => {
                    return (<Link onClick={()=>showTag(arr)}  key={index} className='quote-link' to={`tag/${arr}`}>{arr} </Link>)
                  })}
                </span>
              </div>
              <div className='text-start'>
                <span style={{ color: "gray", fontSize: "small" }}>topic: {quote.topic}</span>
              </div>

            </div>

          </div>
        )
      })}
    </div>
  )
}

export default AuthorShow
