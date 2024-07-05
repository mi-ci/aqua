import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // react-router-dom에서 필요한 요소 import
import "./App.css";
import videoSrc from "./videos/보라카이.mp4"; // 비디오 파일 import
import LoginForm from "./LoginForm";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = (event) => {
    event.stopPropagation(); // 이벤트 전파 중지
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
    if (searchOpen) {
      setSearchOpen(false);
    }
  };

  const handleMenuClick = (event) => {
    closeMenu();
  };

  const toggleSearch = (event) => {
    event.stopPropagation();
    setSearchOpen(!searchOpen);
  };

  return (
    <div className="video-container" onClick={closeMenu}>
      <video autoPlay muted loop id="background-video">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!menuOpen && (
        <div className="menu-button" id="menu-button" onClick={toggleMenu}>
          ☰
        </div>
      )}
      <div className={`search-container ${searchOpen ? "open" : ""}`}>
        {!searchOpen ? (
          <button onClick={toggleSearch} className="search-icon"></button>
        ) : (
          <>
            <button onClick={toggleSearch} className="search-icon"></button>
            <input type="text" placeholder="Search..." />
            <button>검색</button>
          </>
        )}
      </div>
      <div className={`login-container`}>
        <Link to="/login" className="login-icon"></Link>
      </div>
      <div className={`menu ${menuOpen ? "open" : ""}`} id="menu">
        <ul>
          {["웨이크보드", "웨이크서핑", "수상스키"].map((item) => (
            <li key={item}>
              <a href="#" onClick={handleMenuClick}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        <h1>AQUARIUM SHOP</h1>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
};

export default App;
