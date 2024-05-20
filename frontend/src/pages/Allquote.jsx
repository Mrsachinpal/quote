import React, { useEffect, useState } from 'react'
import axios from "axios";
import Quotes from '../component/Quotes';
import { Link } from 'react-router-dom';

function AllQuotes() {
  let [quotes, setQuotes] = useState([])


  useEffect(function () {

    async function getQuotes() {
      const res = await axios.get("http://localhost:8080/allquote");
      console.log('allquote.jsx api run successfully');
      // console.log(res)
      setQuotes(res.data)
    }
    getQuotes();
  }, [])

  return (
    <div className='container'>
      <h3 className='text-center py-3'>Popular Quotes</h3>
      <div className='row pt-3'>
        <div className='col-lg-12 col-md-12 col-sm-12 row py-4'>
          {quotes.map((quotes, index) => {
            return (<Quotes key={quotes._id} id={quotes._id} quote={quotes.quote} author={quotes.author} tag={quotes.tag} topic={quotes.topic}/>)
          })}
        </div>
      </div>
    </div>
  )
}

export default AllQuotes
