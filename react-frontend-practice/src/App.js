import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Profile from "./Pages/Profile";
import { useState } from "react";
function App() {
  const [login, setLogin] = useState(false);

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={login ? <Profile /> : <Navigate to="/" />}
          ></Route>
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <button onClick={() => setLogin(!login)}>
          {login ? "logout" : "login"}
        </button>
      </div>
    </BrowserRouter>
  );
}

export default App;
