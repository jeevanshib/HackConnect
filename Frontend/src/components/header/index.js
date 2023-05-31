import { Link } from 'react-router-dom';
import './style.css';
import {Friends, Gaming, HomeActive, Logo, Market, Menu, Search, Watch, Messenger, Notifications, ArrowDown} from "../../svg";
import {useSelector} from "react-redux"; 
import SearchMenu from './SearchMenu';
import { useState } from 'react';

export default function Header() {
  
  const {user}=useSelector((user)=>({...user}));

  const color = '#EBF7FF';
  const [showSearchMenu, setShowSearchMenu] = useState(false);
  return (
    <div className="fixed top-0 h-[56px] w-[100%] bg-primary z-50 shadow-[1px_8px_15px_-7px] shadow-shadow-2 grid grid-cols-3 text-primary-color">
      <div className="flex items-center gap-[10px] py-[5px] px-[1rem]">
          <Link to='/'>
            <div className="w-[40px] h-[40px] rounded-[50%] cursor-pointer flex items-center justify-center">
              <Logo />
            </div>
          </Link>
          <div className="flex items-center gap-[8px] bg-forth p-[10px] pr-[20px] rounded-[50px] cursor-text search" 
          onClick={()=>{setShowSearchMenu(true)}}>
            <Search color={color} />
            <input type="text" placeholder="Search HackConnect" className="outline-none bg-transparent border-none text-[15px]" />
          </div>
      </div>
      {
        showSearchMenu && <SearchMenu color={color} setShowSearchMenu={setShowSearchMenu} />
      }
      <div className="flex items-center gap-[10px] justify-center header_middle">
        <Link to="/" className="flex items-center justify-center relative w-[125px] h-[50px] cursor-pointer hover:hover1 middle_icon active">
           <HomeActive />
        </Link>
        <Link to="/" className="flex items-center justify-center relative w-[125px] h-[50px] cursor-pointer hover:hover1 middle_icon">
          <Friends />
        </Link>
        <Link to="/" className="flex items-center justify-center relative w-[100px] h-[50px] cursor-pointer hover:hover1 middle_icon">
          <Watch />
          
        </Link>
        <Link to="/" className="flex items-center justify-center relative w-[125px] h-[50px] cursor-pointer hover:hover1 middle_icon">
          <Market />
        </Link>
        <Link to="/" className="flex items-center justify-center relative w-[125px] h-[50px] cursor-pointer hover:hover1 middle_icon">
          <Gaming/>
        </Link>
      </div>
      <div className="flex absolute right-2 top-[50%] translate-y-[-50%] header_right">
      <Link to="/profile" className="flex items-center gap-[5px] cursor-pointer py-[6px] px-[10px] rounded-[50px] font-semibold mr-[10px] text-[14px] leading-[19px] hover:hover1 profile_link">
        <img src={user.picture} className="w-[29px] h-[29px] rounded-[50%] border-[1px] border-solid border-[#b0b3b0]" />
        <span className="mb-[3px]">{user.first_name}</span>
      </Link>
      <div className="relative w-[40px] h-[40px] rounded-[50%] flex items-center justify-center mr-[8px] bg-third cursor-pointer hover:hover1 circle_icon">
        <Menu />
      </div>
      <div className="relative w-[40px] h-[40px] rounded-[50%] flex items-center justify-center mr-[8px] bg-third cursor-pointer hover:hover1 circle_icon">
          <Messenger />
        </div>
        <div className="relative w-[40px] h-[40px] rounded-[50%] flex items-center justify-center mr-[8px] bg-third cursor-pointer hover:hover1 circle_icon">
          <Notifications />
        </div>
        <div className="relative w-[40px] h-[40px] rounded-[50%] flex items-center justify-center mr-[8px] bg-third cursor-pointer hover:hover1 circle_icon">
          <ArrowDown />
        </div>
      </div>
    </div>
  )
        }