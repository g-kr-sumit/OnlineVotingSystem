import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from './useAuth';
import { userContext } from '../App';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state, dispatch } = useContext(userContext);
  const [user, setUser] = useState(useAuth());

  // useEffect to update user state when authentication changes
  

  const handleLogout = () => {
    dispatch({ type: "USER", payload: false });
    localStorage.removeItem('token');
    setUser(null);
    navigate('/signin');
  };

  // handleClick function is unnecessary and can be removed

  // handleHomeClick, handleDashboardClick, handleCreateClick, handleVoteClick, handleHelpClick functions are unnecessary and can be removed
  
  return (
    <div className="container-fluid bg-dark">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark text-white fixed-top" style={{ paddingLeft: "5rem", paddingRight: "5rem" }}>
        <a href="/" className="navbar-brand">
          <img className="logo" src="vote-icon-22.jpg" alt="logo" />
        </a>
        <a href={user ? "/dashboard" : "/"}><h1 className="fw-bold" style={{ paddingLeft: "0.25rem", color: "white" }}>Online Voting System</h1></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto" style={{ paddingRight: "0.25rem" }}>
            {user ? (
              <>
                <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/create">Create Poll</Link></li>
                <li className="nav-item"><button type="button" className="btn btn-outline-light" onClick={handleLogout}>Logout</button></li>
              </>
            ) : (
              <>
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/vote">Vote</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/help">Help</Link></li>
                <li className="nav-item"><a href='/signup'><button type="button" className="btn btn-outline-light me-1">Sign up</button></a></li>
                <li className="nav-item"><a href='/signin'><button type="button" className="btn btn-outline-light me-1">Sign in</button></a></li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
