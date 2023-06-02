import Header from "../../components/header";
import LeftHome from "../../components/home/left";
import { useSelector } from "react-redux";
import RightHome from "../../components/home/right";
import Stories from "../../components/home/stories";
import "./style.css";
import CreatePost from "../../components/createPosts";
import SendVerification from "../../components/home/sendVerification";

export default function Home(){
  const {user} = useSelector((state) => ({...state}));


  return (
    <div className="home">
      <Header />
      <LeftHome user={user}/>
      <div className="absolute mt-[75px] left-[50%] translate-x-[-50%] home_middle">
        <Stories />
        {
        user.verified === false &&
      <SendVerification user={user} />
      }
        <CreatePost user={user}/>

      </div>
      <RightHome />
    </div>
    

  );
}
