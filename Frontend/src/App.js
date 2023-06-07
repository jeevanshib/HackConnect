
import { Routes,Route } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Home from "./pages/home";
import "./index.css";
import "./styles/icons/icons.css";
import LoggedInRoutes from "./Routes/LoggedInRoutes";
import NotLoggedInRoutes from "./Routes/NotLoggedInRoutes";
import Activate from "./pages/home/activate";
import Reset from "./pages/reset";
import CreatePostPopup from "./components/createPostPopup";
import { useSelector } from "react-redux";
import { useState, useReducer, useEffect } from "react";
import { postsReducer } from "./functions/reducers";
import axios from "axios";


function App() {

  const [visible,setVisible] = useState(false)
  const {user} = useSelector((state)=>({...state}))
  const [{ loading, error, posts }, dispatch] = useReducer(postsReducer, {
    loading: false,
    posts: [],
    error: "",
  });
  useEffect(() => {
    getAllPosts();
  }, [])
  const getAllPosts = async () => {
    try {
      dispatch({
        type: "POSTS_REQUEST",
      });
      const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getAllPosts`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      dispatch({
        type: "POSTS_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "POSTS_ERROR",
        payload: error.response.data.message,
      });
    }
  };
  console.log(posts)
  return (
    <div>
      {visible && <CreatePostPopup user={user} setVisible={setVisible}/>}
      <Routes>
        <Route element={<LoggedInRoutes />}>
        <Route path="/profile" element={<Profile />} exact/>
        <Route path="/" element={<Home setVisible={setVisible} posts={posts} />} exact />
        <Route path="/activate/:token" element={<Activate />} exact />
        </Route>
        <Route element={<NotLoggedInRoutes />}>
        <Route path="/login" element={<Login />} exact />
        </Route>
        <Route path="/reset" element={<Reset />} exact/>
        
        
      </Routes>
    </div>
  );
}

export default App;
