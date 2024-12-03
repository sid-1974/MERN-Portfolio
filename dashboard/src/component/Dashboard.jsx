import React, { useState } from "react";
import "../css/Dashboard.css";
import AddPost from "./AddPost"; // Import AddPost component
import EditPost from "./EditPost"; // Import EditPost component
import DeletePost from "./DeletePost"; // Import DeletePost component

function Dashboard() {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <>
      <div className="dashboard-container">
        {/* Navbar */}
        <nav className="dash-navbar">
          <h1 className="dashboard-h1">Dashboard</h1>
          <button className="logout-button">Logout</button>
        </nav>

        {/* Sidebar */}
        <div className="sidebar">
          <ul>
            <li>
              <button onClick={() => setActiveComponent("addPost")}>
                Add Post
              </button>
            </li>
            <li>
              <button onClick={() => setActiveComponent("editPost")}>
                Edit Post
              </button>
            </li>
            <li>
              <button onClick={() => setActiveComponent("deletePost")}>
                Delete Post
              </button>
            </li>
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="main-content" style={{margin: "auto"}}>
          {activeComponent === "addPost" && <AddPost />}
          {activeComponent === "editPost" && <EditPost />}
          {activeComponent === "deletePost" && <DeletePost />}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
