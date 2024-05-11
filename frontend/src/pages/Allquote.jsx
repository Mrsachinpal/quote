import React, { useEffect, useState } from 'react'
import axios from "axios";
import Quotes from '../component/Quotes';
import { Link } from 'react-router-dom';

function AllQuotes() {
 let [quotes,setQuotes]=useState([])
  useEffect(function(){

    async function getQuotes(){
      const res= await axios.get("http://localhost:8080/allquote");
      console.log(res.data);
      setQuotes(res.data)
    }
    getQuotes();
  },[])   
  return (
    <div className='container'>
      <div className='row pt-3'>
        <div className='col-lg-8 col-md-8 col-sm-12 row py-4'>
        <h3 className='text-center pb-3'>Popular Quotes</h3>

        {quotes.map((quotes,index)=>{
          return(<Quotes key={quotes._id} id={quotes._id} quote={quotes.quote} author={quotes.author} tag={quotes.tag} topic={quotes.topic} instagram={quotes.instagram} facebook={quotes.facebook} twitter={quotes.twitter} /> )
        })}
        {/* <div className='col-lg-4 col-md-4 col-sm-12'>THis is me </div>
        <div className='col-lg-4 col-md-4 col-sm-12'>THis is me </div>
        <div className='col-lg-4 col-md-4 col-sm-12'>THis is me </div> */}
        </div>
        <div className='col-lg-4 col-md-4 col-sm-12 py-4 text-center sidebar'>
        <h3 className='text-center pb-3'>Today Interesting</h3>
        <div className=''><i class="fa-solid fa-cake-candles"></i> Birthday</div>
        <hr  style={{width:'20%', margin:"auto", marginTop:"10px"}}/>

        <div className=''><i class="fa-solid fa-cross"></i> Death</div>
        <hr  style={{width:'20%', margin:"auto", marginTop:"10px"}}/>

        <div className=''><i class="fa-solid fa-fire"></i> Popular Topics</div>
        <hr  style={{width:'20%', margin:"auto", marginTop:"10px"}}/>
        <div className='py-2'>
          <p className=' p-0 m-0'><i class="fa-solid fa-user"></i> Popular Author</p>

          {quotes.map((quote,index)=>{
          return(<p className='m-0' key={quote._id}><Link className='sidebar-link' to={'#'}>{quote.author}</Link></p>)
        })}
        </div>


        </div>

      </div>


      
      

    </div>
  )
}

export default AllQuotes
