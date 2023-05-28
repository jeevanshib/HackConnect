import {useState} from 'react';
import LoginForm from "../../components/login/LoginForm";

export default function Login() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="">
      <div className="bg-secondary h-[100vh]">
        <LoginForm />
        {/* {visible && <RegisterForm setVisible={setVisible} />} */}
      </div>
    </div>
  )
}