import {Formik, Form} from 'formik';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import LoginInput from '../../components/inputs/loginInput';
import * as Yup from 'yup';

const loginInfos = {
    email: "",
    password: "",
  }

export default function LoginForm() {
    const[login, setlogin]=useState(loginInfos);
  const {email, password}=login;
  console.log(login);
  const handleLoginChange = (e) => {
    const {name, value} = e.target;
    setlogin({
      ...login,
      [name]: value,
    })
  }
  const loginValidation = Yup.object({
    email: Yup.string().required("Email Address is Required")
    .email("Email is Invalid")
    .max(50, "Email must be less than 50 characters"),
    password: Yup.string().required("Password is Required"),
  })
  return (
    <div className="h-[78vh] text-primary-color md:flex md:items-center md:max-w-[1000px] md:my-0 md:mx-auto md:py-0 md:px-[1rem]">
        <div className="w-[300px] mx-auto my-0 md:flex md:flex-col md:w-[50%] md:mb-[25vh]">
          <img src="../../icons/facebook.svg" className="w-[400px] ml-[-1rem]" alt="" />
          <span className="text-[17px] md:text-[20px]">
          HackConnect helps you connect and improve your skills with other developers.
          </span>
        </div>
        <div className="text-center">
          <div className="flex flex-col items-center gap-[1rem] bg-primary shadow-[0_1px_2px] shadow-shadow-1 p-[1rem] pb-[2rem] w-[350px] my-[1rem] mx-auto h-fit select-none rounded-[10px] md:w-[400px]">
            <Formik 
            enableReinitialize
            initialValues={{
              email,
              password,
            }}
            validationSchema={loginValidation}
            >
              {(formik) => (
                <Form>
                  <LoginInput 
                  type="text" 
                  name="email" 
                  placeholder="Email address or phone number" 
                  onChange={handleLoginChange} 
                  bottom
                  />
                  <LoginInput 
                  type="password" 
                  name="password" 
                  placeholder="Password" 
                  onChange={handleLoginChange} 
                  bottom />
                  
                  <button type="submit" className="w-[100%] h-[50px] text-[17px] font-bold blue-btn">Log In</button>
                </Form>
              )}
            </Formik>
            <Link to="/reset" className="text-blue-color cursor-pointer text-[14px] hover:underline">Forgot Password?</Link>
            <div className="w-[100%] h-[1px] bg-third"></div>
            <button className="important blue-btn w-[70%] h-[50px] text-[17px] font-semibold mt-[1rem] bg-green-color">Create Account</button>
          </div>
          <Link to="/" className="text-[15px]"><b>Create A Page</b> for a hackathons, codeathons and contests.</Link>
        </div>
      </div>
)
}