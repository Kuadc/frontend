import React from 'react'
import "./Register.css"

export default function Register () {
  
  return (
    <>

        <div className='user'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='usersvg'>
                <path strokeLinecap="round" strokeLinejoin="round"  d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
            </svg>
        </div>
        <form action="" className='form-register'>
            <h3>Register</h3>
            <div className='container'>
                
                <div>
                <label htmlFor="">Fullname</label>
                <input type="text" name="" id="Fullname" placeholder='Enter Fullname' />
                
                <label htmlFor="">Username</label>
                <input type="text" name="" id="Username" placeholder='Enter User' />

                <label htmlFor="">Email</label>
                <input type="text" name="" id="Email" placeholder='Enter Emal' />

                </div>
                <div>
                <label htmlFor="">Phone Number</label>
                <input type="text" name="" id="Phone" placeholder='Enter phone number' />

                <label htmlFor="">Password</label>
                <input type="password" name="" id="Password" placeholder='Create password' />

                <label htmlFor="">Confirm Password</label>
                <input type="password" name="" id="Confirm" placeholder='Confirm password' />
                </div>

                <div className='button-grid'>
                <button className='button'>Sign up</button>
                <div className='signup'><p>Already have an account?</p><p className='sign'>Login</p></div>
                <p className='or-register'>or</p>
                <button className='button-google-register'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#535bf2" viewBox="0 0 256 256" className='hide'><path d="M228,128a100,100,0,1,1-22.86-63.64,12,12,0,0,1-18.51,15.28A76,76,0,1,0,203.05,140H128a12,12,0,0,1,0-24h88A12,12,0,0,1,228,128Z"></path></svg>Login With Google</button>
                </div>
                
                

                
            </div>
        </form>
    </>
  )
}
