import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8099/login", {
        username,
        password,
      });
      console.log(response.data);
      if (response.data === "Login successful") {
        setIsAuthenticated(true);
        setUser(username);
      } else {
        alert("로그인 실패");
      }
    } catch (error) {
      alert("서버 연결 실패");
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h2>Welcome, {user}!</h2>
          <button
            onClick={() => {
              setIsAuthenticated(false);
              setUser(null);
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
