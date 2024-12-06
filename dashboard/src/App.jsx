import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Dashboard from "./component/Dashboard";
import Login from "./component/Login";
import AddPost from "./component/AddPost";
import EditPost from "./component/EditPost";
import DeletePost from "./component/DeletePost";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove auth token
    setIsAuthenticated(false); // Update auth state
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route: Login */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Login setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <Dashboard onLogout={handleLogout} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/add-post"
          element={isAuthenticated ? <AddPost /> : <Navigate to="/" />}
        />
        <Route
          path="/edit-post"
          element={isAuthenticated ? <EditPost /> : <Navigate to="/" />}
        />
        <Route
          path="/delete-post"
          element={isAuthenticated ? <DeletePost /> : <Navigate to="/" />}
        />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
