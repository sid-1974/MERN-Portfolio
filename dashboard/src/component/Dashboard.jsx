import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "../css/Dashboard.css";
import AddPost from './AddPost';
import EditPost from './EditPost';
import DeletePost from './DeletePost';

function Dashboard() {
  return (
    <Router>
      <div className="dashboard-container">
      <nav className='dash-navbar'>
  <h1 className='dashboard-h1'>Dashboard</h1>
  <button className='logout-button'>Logout</button>
</nav>

        
        <div className="sidebar">
          <ul>
            <li><Link to="/add-post"><button>Add Post</button></Link></li>
            <li><Link to="/edit-post"><button>Edit Post</button></Link></li>
            <li><Link to="/delete-post"><button>Delete Post</button></Link></li>
          </ul>
        </div>
        
        <div className="dashboard-content">
          <Routes>
            <Route path="/add-post" element={<AddPost />} />
            <Route path="/edit-post" element={<EditPost />} />
            <Route path="/delete-post" element={<DeletePost />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Dashboard;
