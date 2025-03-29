import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import AuthProvider from "./AuthContext"; // Import AuthProvider

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, use reportWebVitals
reportWebVitals();
