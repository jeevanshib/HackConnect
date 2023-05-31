import Header from "../../components/header";
import LeftHome from "../../components/home/left";
// import useClickOutside from "../../helpers/clickOutSide";
// import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import RightHome from "../../components/home/right";

export default function Home(){
  const {user} = useSelector((user) => ({...user}));


  return (
    <div>
      <Header />
      <LeftHome user={user}/>
      <RightHome />
    </div>
    

  );
}
