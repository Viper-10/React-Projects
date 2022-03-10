import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./CSS/App.css";
import "./CSS/Utilities.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import HooksPage from "./Pages/HooksPage";
import NotFound from "./Pages/NotFound";
import Counter from "./Components/Counter";
import Counter2 from "./Components/Counter2";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hooks" element={<HooksPage />} exact />
          <Route path="/hooks/counter" element={<Counter />} exact />
          <Route path="/hooks/counter-2" element={<Counter2 />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
