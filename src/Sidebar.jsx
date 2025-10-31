import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Sidebar.css' // 👈 We'll add custom styles here

function Sidebar() {
  const navigate = useNavigate()

  return (
    <div className="sidebar d-flex flex-column justify-content-between p-3">
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="logo mb-4 text-center">
          <img
            src="src/assets/OIP.webp"
            alt="Instagram Logo"
            className="img-fluid sidebar-logo"
          />
        </div>

        {/* Menu Items */}
        <div className="menu d-flex flex-column gap-3">
          <div className="menu-item"><i className="bi bi-house"></i> Home</div>
          <div className="menu-item"><i className="bi bi-search"></i> Search</div>
          <div className="menu-item"><i className="bi bi-compass"></i> Explore</div>
          <div className="menu-item"><i className="bi bi-camera-reels"></i> Reels</div>
          <div className="menu-item"><i className="bi bi-chat"></i> Messages</div>
          <div className="menu-item"><i className="bi bi-heart"></i> Notifications</div>
          <div className="menu-item"><i className="bi bi-plus-square"></i> Create</div>
          <div
            className="menu-item"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/profile')}
          >
            <i className="bi bi-person-circle"></i> Profile
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-menu d-flex flex-column gap-3">
        <div className="menu-item"><i className="bi bi-threads"></i> Threads</div>
        <div className="menu-item"><i className="bi bi-list"></i> More</div>
      </div>
    </div>
  )
}

export default Sidebar
