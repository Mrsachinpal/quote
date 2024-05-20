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
  let navigate = useNavigate();


  async function addquoteHandler(e) {
    e.preventDefault();
    let author = authorInputRef.current.value;
    let quote = quoteInputRef.current.value;
    let dob = dobInputRef.current.value;
    let email = emailInputRef.current.value;

    let tagString = tagInputRef.current.value;
    let tag = tagString.split(',');

    let topicString = topicInputRef.current.value;
    let topic = topicString.split(',');

    try {
      let res = await axios.post('http://localhost:8080/addquote', { author, quote, tag, topic, dob, email })
      console.log(res.data);
      navigate('/quote')
    }
    catch (e) {
      console.log('cannot create quote');
    }
  }

  return (
    <div className='row p-3'>
      <div className='container py-5 addquote  col-lg-6 col-md-6 col-sm-12 '>
        <h1 className='text-center'>Add Text Quote</h1>
        <form onSubmit={addquoteHandler} className=''>
          <div className=' row pt-4 '>
            <div>
              <h5 className='addquote-heading'>Quotes Detail <hr /></h5>
              <div>
                <label htmlFor="text" className='d-block'>Quote :</label>
                <input className='input-div' type="text" ref={quoteInputRef} id='text' required />
              </div>
              <div>
                <label htmlFor="tag" className='d-block'>Tags :</label>
                <input className='input-div' type="text" ref={tagInputRef} id='tag' required />
              </div>
              <div>
                <label htmlFor="topic" className='d-block'>Topic :<span style={{ fontSize: '12px', color: "gray" }}>(Optional)</span></label>
                <input className='input-div' type="text" title='Optional' ref={topicInputRef} id='topic'/>
              </div>
            </div>
            <h5 className='addquote-heading mt-4'>Author Detail<hr /></h5>
            <div className='addquote-author-div '>
              <div>
                <label htmlFor="name" className='d-block'>Auhtor Name :</label>
                <input className='input-div' type="text" ref={authorInputRef} id='name' required />
              </div>
              <div>
                <label htmlFor="text" className='d-block'>DOB :</label>
                <input className='input-div' type="date" ref={dobInputRef} id='text' required />
              </div>
              <div>
                <label htmlFor="email" className='d-block'>Email :</label>
                <input className='input-div' type="email" ref={emailInputRef} id='email' required />
              </div>
            </div>
          </div>
          <div className='text-center'>
            <button className=' addquote-submit-button '>Add Quote</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Addquote
