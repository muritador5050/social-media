import React from 'react'
import '../loginPage/loginPage.css'
import { Link } from 'react-router-dom'


const LoginPage = () => {
    
    return (
        <div className='block-display'>
            <div className='flex-login'>
                <div className='flex-me'>
                    <div className='facebook'>
                        <h1 className='fbk-logo'>facebook</h1>
                        <p style={{ fontSize: '30px' }}>
                            Facebook helps you connect and share
                            <br />
                            with the people in your life.
                        </p>
                    </div>
                </div>
                <div className='flex-me'>
                    <div className='log-d'>
                        <input className='email-input' type={'email'} placeholder='Email address or phone number' />
                        <br />
                        <input className='input-password' type='password' placeholder='Password' />
                        <br />
                        <Link to='/mainOutput' >
                            <button className='login-button'>Log in </button>
                        </Link>
                        <p className='forgot-password' >Forgotten password?</p>

                        <hr style={{ border: '.01em solid rgb(197, 207, 207)', margin: '1em' }}></hr>

                        <button className='create-account' >Create New Account</button>
                    </div>
                </div>
            </div>
            <span className='create-page' ><b>Create a Page</b> &nbsp; for a celebrity, brand or business.</span>
        </div>
    )
}

export default LoginPage

