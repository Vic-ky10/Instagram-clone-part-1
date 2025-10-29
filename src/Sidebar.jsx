import React from 'react'

function Sidebar() {
  return (
    <div className='sidebar p-3'>
      <div className='d-flex flex-column gap-3 position-fixed'>
        <img className="logo-text  "
          src="Instagram\src\assets\OIP.webpC:\Users\vigne\OneDrive\Desktop\Instagram\Instagram\src\assets\OIP.webp" />
        <div><i className="bi bi-house"></i> Home</div>
        <div><i className="bi bi-search"></i> Search</div>
        <div><i className="bi bi-compass"></i> Expolre</div>
        <div><i className="bi bi-camera-reels"></i> Reels</div>
        <div><i className="bi bi-chat"></i> Message </div>
        <div><i className="bi bi-heart"></i> Notification</div>
        <div><i className="bi bi-plus-square"></i> Create </div>
        <div><i className="bi bi-person-circle"></i> Profile </div>
      </div>
      <div className='position-fixed bottom-0 d-flex flex-column gap-3 mb-3'>
        <div><i className="bi bi-threads"></i> Threads</div>
        <div><i className="bi bi-list"></i> More</div>
      </div>
    </div>
  )
}

export default Sidebar