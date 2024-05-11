import React, { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Addquote() {
  let quoteInputRef = useRef();
  let authorInputRef = useRef();
  let tagInputRef = useRef();
  let dobInputRef = useRef();
  let topicInputRef = useRef();
  let emailInputRef = useRef();
  let facebookInputRef = useRef();
  let instagramInputRef = useRef();
  let twitterInputRef = useRef();

  let navigate = useNavigate();


  async function addquoteHandler(e) {
    e.preventDefault();
    let author = authorInputRef.current.value;
    let quote = quoteInputRef.current.value;
    let tag = tagInputRef.current.value;
    let topic = topicInputRef.current.value;
    let dob = dobInputRef.current.value;
    let email = emailInputRef.current.value;
    let instagram = instagramInputRef.current.value;
    let facebook = facebookInputRef.current.value;
    let twitter = twitterInputRef.current.value;


    try {
      let res = await axios.post('http://localhost:8080/addquote', { author, quote, tag, topic, dob, email, instagram, facebook, twitter })
      navigate('/quote')
    }
    catch (e) {
      console.log('cannot create quote');
    }

  }

  async function addpicturequoteHandler(e) {
    e.preventDefault();
    let author = authorInputRef.current.value;
    let quote = quoteInputRef.current.value;
    let tag = tagInputRef.current.value;
    let topic = topicInputRef.current.value;
    let dob = dobInputRef.current.value;
    let email = emailInputRef.current.value;
    let instagram = instagramInputRef.current.value;
    let facebook = facebookInputRef.current.value;
    let twitter = twitterInputRef.current.value;


    try {
      let res = await axios.post('http://localhost:8080/addimagequote', { author, quote, tag, topic, dob, email, instagram, facebook, twitter })
      navigate('/quote')
    }
    catch (e) {
      console.log('cannot create quote');
    }

  }


  return (
    <div className='row p-3'>
      <h6 className='text-center pt-5 pb-2 '>Which Type of Quote you want to upload text/Picture formate. choose any one at a time</h6>
      <hr />
      <div className='container py-5 addquote  col-lg-6 col-md-6 col-sm-12 '>
        <h1 className='text-center'>Add Text Quote</h1>
        <form onSubmit={addquoteHandler} className=''>
          <div className=' row pt-4 '>
            <div>
              <h5 className='addquote-heading'>Quotes Detail <hr /></h5>
              <div>
                <label htmlFor="text" className='d-block'>Quote :</label>
                <input className='input-div' type="text" ref={quoteInputRef} id='text' />
              </div>
              <div>
                <label htmlFor="tag" className='d-block'>Tags :</label>
                <input className='input-div' type="text" ref={tagInputRef} id='tag' />
              </div>
              <div>
                <label htmlFor="topic" className='d-block'>Topic :</label>
                <input className='input-div' type="text" ref={topicInputRef} id='topic' />
              </div>

            </div>

            <h5 className='addquote-heading mt-4'>Author Detail<hr /></h5>
            <div className=' addquote-quote-div col-lg-6 col-md-6 col-sm-12'>
              <div>
                <label htmlFor="facebook" className='d-block'>Facebook :</label>
                <input className='input-div' type="text" ref={facebookInputRef} placeholder='Url' id='facebook' />
              </div>
              <div>
                <label htmlFor="instagram" className='d-block'>Instagram :</label>
                <input className='input-div' type="text" ref={instagramInputRef} placeholder='Url' id='instagram' />
              </div>
              <div>
                <label htmlFor="twitter" className='d-block'>Twitter :</label>
                <input className='input-div' type="text" ref={twitterInputRef} placeholder='Url' id='twitter' />
              </div>
            </div>

            <div className='addquote-author-div col-lg-6 col-md-6 col-sm-12'>
              <div>
                <label htmlFor="name" className='d-block'>Auhtor Name :</label>
                <input className='input-div' type="text" ref={authorInputRef} id='name' />
              </div>
              <div>
                <label htmlFor="text" className='d-block'>DOB :</label>
                <input className='input-div' type="date" ref={dobInputRef} id='text' />
              </div>
              <div>
                <label htmlFor="email" className='d-block'>Email :</label>
                <input className='input-div' type="email" ref={emailInputRef} id='email' />
              </div>

            </div>

            <button className='w-50 m-auto addquote-submit-button'>Add Quote</button>
          </div>

        </form>
      </div>

      <div className='container py-5 addquote  col-lg-6 col-md-6 col-sm-12'>
        <h1 className='text-center'>Add picture Quote</h1>
        <form onSubmit={addpicturequoteHandler}>
          <div className=' row pt-4'>
            <div>
              <h5 className='addquote-heading'>Quotes Detail <hr /></h5>
              <div>
                <label htmlFor="text" className='d-block'>Quote image :</label>
                <input className='input-div' type="file" ref={quoteInputRef} id='text' />
              </div>
              <div>
                <label htmlFor="tag" className='d-block'>Tags :</label>
                <input className='input-div' type="text" ref={tagInputRef} id='tag' />
              </div>
              <div>
                <label htmlFor="topic" className='d-block'>Topic :</label>
                <input className='input-div' type="text" ref={topicInputRef} id='topic' />
              </div>

            </div>

            <h5 className='addquote-heading mt-4'>Author Detail<hr /></h5>
            <div className=' addquote-quote-div col-lg-6 col-md-6 col-sm-12'>
              <div>
                <label htmlFor="facebook" className='d-block'>Facebook :</label>
                <input className='input-div' type="text" ref={facebookInputRef} placeholder='Url' id='facebook' />
              </div>
              <div>
                <label htmlFor="instagram" className='d-block'>Instagram :</label>
                <input className='input-div' type="text" ref={instagramInputRef} placeholder='Url' id='instagram' />
              </div>
              <div>
                <label htmlFor="twitter" className='d-block'>Twitter :</label>
                <input className='input-div' type="text" ref={twitterInputRef} placeholder='Url' id='twitter' />
              </div>
            </div>

            <div className='addquote-author-div col-lg-6 col-md-6 col-sm-12'>
              <div>
                <label htmlFor="name" className='d-block'>Auhtor Name :</label>
                <input className='input-div' type="text" ref={authorInputRef} id='name' />
              </div>
              <div>
                <label htmlFor="text" className='d-block'>DOB :</label>
                <input className='input-div' type="date" ref={dobInputRef} id='text' />
              </div>
              <div>
                <label htmlFor="email" className='d-block'>Email :</label>
                <input className='input-div' type="email" ref={emailInputRef} id='email' />
              </div>

            </div>

            <button className='w-50 m-auto addquote-submit-button'>Add Quote</button>
          </div>

        </form>
      </div>

    </div>
  )
}

export default Addquote
