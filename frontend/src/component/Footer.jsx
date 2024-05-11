import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <div className="footer text-center ">
                <div className='row mt-5 py-5'>
                    <section className='col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center align-items-center'>
                        <h2>uddharan</h2>
                    </section>
                    <section className='col-lg-4 col-md-4 col-sm-12'>
                        <ul>
                            <li> <Link to={'#'} >Authors</Link></li>
                            <li> <Link to={'#'} >Topics</Link></li>
                            <li> <Link to={'#'} >Picture Quotes</Link></li>
                            <li> <Link to={'#'} > Quotes of the day</Link></li>
                        </ul>
                    </section>
                    <section className='col-lg-4 col-md-4 col-sm-12'>
                        <ul>
                            <li> <Link to={'#'} >About Us</Link></li>
                            <li> <Link to={'#'} >Contact Us</Link></li>
                            <li> <Link to={'#'} >Terms</Link></li>
                            <li> <Link to={'#'} >Privacy and Policy</Link></li>

                        </ul>
                    </section>

                </div>
            </div>

        </div>
    )
}

export default Footer
