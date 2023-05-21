import './style.css'

import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';

export default function Login(){
    return (
      <div className="login">
        <div className="login-wrapper">
        <div className="login-wrap">
        <div className="login-1">
          <img src='../../icons/facebook.svg' alt='logo' />
          <h2>Can’t find a perfect team for your hackathon?</h2>
          <span>Use hackconnect to find your team for your </span><span>hackathons and improve your technical skills.</span>
        </div>
        <div className="login-2">
          <div className="login-2-wrap">
            <Formik>
              {
                (formik) => (
                  <Form>
                    <input type="text" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password" />
                    <button type="submit">Log In</button>
                  </Form>
                )
              }
            </Formik>
            <Link to="/forgotten">Forgot Password?</Link>
            <div className='sign_splitter'></div>
            <button className='blue_btn open_signup'>
              Create New Account
            </button>
          </div>

        </div>
        <Link to="/">
          <b>Create a page </b>
           for a hackathons.
        </Link>
        </div>
        </div>
      </div>
      
    )
  }