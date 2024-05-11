import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
    const [error, setError] = useState('');
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();
    const navigate = useNavigate();

    async function signupuser(e) {
        e.preventDefault();
        const name = nameInputRef.current.value;
        const username = usernameInputRef.current.value;
        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;
        try {
            const res = await axios.post('http://localhost:8080/login/register', { name, username, password, email });
            // Registration successful, navigate to login page
            navigate('/login');
        } catch (e) {
            // Registration failed, display error message
            setError('Registration failed. Please try again later.');
            console.error(e);
        }
    }

    return (
        <div>
            <div className='container mx-auto' style={{ width: "40%" }}>
                <div className='row my-5 text-center'>
                    <section className='row mb-4'>
                        <section className='col-12 '><h2><i className="fa-solid fa-user-plus"></i> Create New Account</h2> </section>
                    </section>
                    <section className='col-12 p-5 border'>
                        <form onSubmit={signupuser}>
                            <div className='mb-3'>
                                <label htmlFor="name" className='d-block mb-2'> <b>Name: </b></label>
                                <input type="text" className='w-75' ref={nameInputRef} name="name" id="name" required />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="email" className='d-block mb-2'> <b>Email: </b></label>
                                <input type="email" className='w-75' ref={emailInputRef} name="email" id="email" required />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="username" className='d-block mb-2'> <b>Username: </b></label>
                                <input type="text" className='w-75' ref={usernameInputRef} name="username" id="username" required />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="password" className='d-block mb-2'> <b>Password: </b></label>
                                <input type="password" className='w-75' ref={passwordInputRef} name="password" id="password" required />
                            </div>
                            <div className='mb-3'>
                                <button type='submit' style={{ backgroundColor: "transparent" }}>Create account</button>
                            </div>
                            {error && <div className="text-red-500">{error}</div>}
                            <div className=''>
                                <Link to={"/login"}>Already have an account </Link>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Signup;
