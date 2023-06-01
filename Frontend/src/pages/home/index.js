import Header from "../../components/header";
import LeftHome from "../../components/home/left";
// import useClickOutside from "../../helpers/clickOutSide";
// import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import Stories from "../../components/home/stories";
import RightHome from "../../components/home/right";
import { useRef } from "react";

export default function Home(){
  const middle = useRef(null);
  const {user} = useSelector((user) => ({...user}));


  return (
    <div>
      <Header />
      <LeftHome user={user}/>
      <div className="absolute mt-[75px] left-[50%] translate-x-[-50%] home_middle">
      <Stories />
      </div>
      <RightHome />
    </div>
    

  );
}
