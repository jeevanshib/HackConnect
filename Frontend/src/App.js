
import { Routes,Route } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Home from "./pages/home";
import "./index.css";
import "./styles/icons/icons.css";
import LoggedInRoutes from "./Routes/LoggedInRoutes";
import NotLoggedInRoutes from "./Routes/NotLoggedInRoutes";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<LoggedInRoutes />}>
        <Route path="/profile" element={<Profile />} exact/>
        <Route path="/" element={<Home />} exact />
        </Route>
        <Route element={<NotLoggedInRoutes />}>
        <Route path="/login" element={<Login />} exact />
        </Route>
        
        
        
      </Routes>
    </div>
  );
}

export default App;
