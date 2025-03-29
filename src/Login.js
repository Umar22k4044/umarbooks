import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

const Login = () => {
  const auth = useContext(AuthContext); // Ensure context is accessed correctly
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (!auth) {
    return <p>Error: AuthContext not available</p>;
  }

  const { login } = auth;

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;