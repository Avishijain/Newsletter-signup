import React from 'react';
import './SignupPage.css';
import icon from '../../Assets/icon-success.svg';
import signupDesktop from '../../Assets/illustration-sign-up-desktop.svg';

const SignupPage = () => {
  return (
    <div className='signup-Page'>

      <div className='outer-div'>

        <div className='inner-div'>
          
          <div className='content'>
            
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>

            <div className='list-item'>
              <img src={icon}/>
              <p>Product disocvery and building what matters</p>
            </div>
            <div className='list-item'>
              <img src={icon}/>
              <p>Measuring to ensure updates are a success</p>
            </div>
            <div className='list-item'>
              <img src={icon}/>
              <p>And much more!</p>
            </div>

            <form className='form'>
              <label>Email address</label>
              <input type='text' name='Email address' placeholder='email@company.com' required/>

              <button>Subscribe to monthly newsletter</button>
            </form>

          </div>

          <div className='image'>
            <img src={signupDesktop} />
          </div>

        </div>


      </div>

    </div>
  )
}

export default SignupPage;