import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';


function Author() {
  let [quotes, setQuotes] = useState([])
  let navigate = useNavigate();
  useEffect(function () {

    async function getQuotes() {
      try {
        const res = await axios.get("http://localhost:8080/allauthor");
        console.log('author.jsx api run successfully. ');
        // console.log(res)
        setQuotes(res.data)
      }
      catch (e) {
        console.log('error in author.jsx api:', e)
      }
    }
    getQuotes();
  }, [])

  function showAuthor(author) {
    console.log(author);
    navigate(`/authors/${author}`);
  }

  return (
    <div className='container w-75' style={{ minHeight: "55vh" }}>
      <h3 className='text-center py-4'>List of authors</h3>
      <div>

        
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {quotes.map((quotes, index) => {
              return(
              <tbody >
                <tr>
                  <th scope="row">{index+1}</th>
                  <td>{quotes.author}</td>
                  <td><button className='btn ' style={{backgroundColor:"peru"}} onClick={() => showAuthor(quotes.author)}>Show</button></td>
                </tr>
              </tbody>
              )
            })}
          </table>

        
        </div>

      </div>
    </div>

  )
}

export default Author
