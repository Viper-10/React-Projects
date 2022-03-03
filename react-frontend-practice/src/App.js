import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import DropDownMenu from "./Pages/DropDownMenu";
import NotFound from "./Pages/NotFound";
import Profile from "./Pages/Profile";
import { useState } from "react";
import Counter from "./Pages/Counter";
function App() {
  const [login, setLogin] = useState(false);

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={login ? <Profile /> : <Navigate to="/" />}
          ></Route>
          <Route path="/dropdownmenu" element={<DropDownMenu />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        {/* <button onClick={() => setLogin(!login)}>
          {login ? "logout" : "login"}
        </button> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
