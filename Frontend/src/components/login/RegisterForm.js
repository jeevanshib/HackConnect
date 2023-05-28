import { Formik, Form } from 'formik';
import RegisterInput from '../../components/inputs/registerInput';
import {useState} from 'react';
import * as Yup from 'yup';
import DateOfBirthSelect from './DateOfBirthSelect';
import GenderSelect from './GenderSelect';

export default function RegisterForm() {
    const userInfos = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        bYear: new Date().getFullYear(),
        bMonth:new Date().getMonth()+1,
        bDay:new Date().getDate(),
        gender:"",
        };
    const[user, setUser]=useState(userInfos);
    const {
        firstName,
        lastName,
        email,
        password,
        bYear,
        bMonth,
        bDay,
        gender,
      } = user;

    const yearTemp = new Date().getFullYear();
    const handleRegisterChange = (e) => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value,
        })
    }
    const years = Array.from(new Array(108),(val, index) => yearTemp - index);

    const months = Array.from(new Array(12),(val, index) => 1 + index);
  const getDays = () => {
    return new Date(bYear, bMonth, 0).getDate();
  }
  const days = Array.from(new Array(getDays()),(val, index) => 1 + index);
//   console.log(days);
// console.log(user);


    const registerValidation = Yup.object({
        firstName: Yup.string().required("What's your First Name?").min(2, "First Name must be between 2 and 16 characters").max(16, "First Name must be between 2 and 16 characters").matches(/^[aA-zZ\s]+$/, "Numbers and special Character are not allowed"),
    lastName: Yup.string().required("What's your Last Name?").min(2, "Last Name must be between 2 and 16 characters").max(16, "Last Name must be between 2 and 16 characters").matches(/^[aA-zZ]+$/, "Numbers and special Character are not allowed"),
    email: Yup.string().required("You will require this when you try to login or when you need to change your password.").email("Enter a valid Email Address."),
    password: Yup.string().required("Password must contain atleast 6 characters, 1 special charater, 1 number, letters").min(6, "Password must be atleast 6 characters").max(36, "Password must be atleast 6 characters"),
  })

  const [dateError, setDateError] = useState("");
  const [genderError, setGenderError] = useState("");
return (
  <div>
    <div className="bg-blur absolute top-0 left-0 h-[100%] w-[100%]">
    <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] bg-primary shadow-[0_1px_2px] shadow-shadow-1 rounded-[10px] p-[15px] pb-[1rem] w-[350px] h-fit text-primary-color lg:w-[400px] ">
      <div className="relative flex flex-col gap-[10px] pb-[10px] border-b-[1px] border-b-solid border-b-third">
        <i className="exit_icon absolute right-0 cursor-pointer"></i>
        <span className="text-[32px] font-bold">Sign Up</span>
        <span className="text-[15px] text-secondary-color">It's quick and easy</span>
      </div>
      <Formik
      enableReinitialize
      initialValues={{
        firstName,
        lastName,
        email,
        password,
        bYear,
        bMonth,
        bDay,
        gender,
      }}
      validationSchema={registerValidation}
      onSubmit={() => {
        let current_date = new Date();
        let picked_date = new Date(bYear, bMonth - 1, bDay);
        let atleast14 = new Date(1970 + 14, 0, 1);
        let noMoreThan70 = new Date(1970 + 70, 0, 1);
        if(current_date - picked_date < atleast14){
          setDateError("It looks like you have entered the wrong information. Please make sure you are entering your real date of birth.")
        }
        else if(current_date - picked_date > noMoreThan70){
          setDateError("It looks like you have entered the wrong information. Please make sure you are entering your real date of birth.")
          }
          else{
            setDateError("");
          }
          if (gender === ''){
            setGenderError("Please choose a gender. You can change who can see this later.");
          }
          else{
            setGenderError("");
          }
        }}
        >
          {
            (formik) => (
              <Form className="w-[100%] flex flex-col items-center">
                <div className="reg_line lg:w-[370px]">
                  <RegisterInput type="text" placeholder="First Name" name="firstName" first onChange={handleRegisterChange} />
                  <RegisterInput type="text" placeholder="Last Name" name="lastName" last onChange={handleRegisterChange} />
                </div>
                <div className="reg_line">
                  <RegisterInput type="text" placeholder="Mobile Number or Email Address" name="email" email onChange={handleRegisterChange} />
                </div>
                <div className="reg_line">
                  <RegisterInput type="password" placeholder="New Password" name="password" pass onChange={handleRegisterChange} />
                </div>
                <DateOfBirthSelect bDay={bDay} bMonth={bMonth} bYear={bYear} days={days} months={months} years={years} handleRegisterChange={handleRegisterChange} dateError={dateError} />
                <GenderSelect handleRegisterChange={handleRegisterChange} genderError={genderError} />
                <div className="text-[11px] mt-[10px] text-secondary-color">
                  By clicking Sign Up, you agree to our {" "}
                  <span className="text-blue-color">Terms, Data Policy &nbsp;</span>
                  and <span className="text-blue-color">Cookie Policy.</span> You may recieve SMS 
                  notifications from us and can opt out at any time.
                </div>
                <div className="w-[100%] flex items-center justify-center mt-[20px] mx-0 mb-[10px]">
                  <button className="blue-btn bg-green-color w-[70%] h-[50px] text-[17px] font-bold">Sign Up</button>
                </div>
            </Form>
            )}
        </Formik>
      </div>
      </div>
    </div>
  )
}