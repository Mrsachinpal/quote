import axios from 'axios';
import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

    let usernameInputRef=useRef();
    let passwordInputRef=useRef();
    let navigate=useNavigate();

async function loginuser(e){
    e.preventDefault()
    let username=usernameInputRef.current.value
    let password=passwordInputRef.current.value
    try{
        let res=await axios.post('http://localhost:8080/login',{username,password});
        console.log(res)
        navigate('/');
    }
    catch(e){
        console.log(e);
    }

}

  return (
    <div>
        <div className='container mx-auto' style={{width:"40%"}}>
            <div className='row my-5 text-center'>
                <section className='row mb-4'>
                <section className='col-12 '><h2><i class="fa-solid fa-user"></i> Login with your account</h2> </section>
                </section>
                <section className='col-12 p-5 border'>
                    <form className='form' onSubmit={loginuser}>
                        <div className='mb-3'>
                         <label htmlFor="username" className='d-block mb-2'> <b>Username: </b></label>       {/*username */}
                        <input type="text" className='w-75' name="username" ref={usernameInputRef} id="username"/>
                        </div>
                        <div className='mb-3'>
                        <label htmlFor="password" className='d-block mb-2'> <b>Password: </b></label>        {/*password */}
                        <input type="password"  className='w-75' name="password" ref={passwordInputRef} id="password"/>
                        </div>
                        <div className='mb-3'>
                        <button type='submit' style={{backgroundColor:"transparent"}}>Login</button>
                        </div>
                        <div className=''>
                            <Link to={"/login/register"}>Create New Account </Link>
                        </div>
                        
                    </form>
                </section>


            </div>
        </div>

    </div>
  )
}

export default Login
