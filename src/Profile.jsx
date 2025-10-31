import React, { useEffect, useState } from 'react'
import axios from 'axios'




function Profile() {
  const [profile, setprofile] = useState(null)


  useEffect(() => {
    axios.get('http://localhost:3000/Profile')
      .then(data => { setprofile(data.data); console.log(data) })
  }, [])
  return (
    <div>
      {profile ? (
        <div className=' m-5 d-flex flex-column justify-content-center'>
          <img className='rounded-circle proflie-pic  ' src={profile.userImage} />
          <h2>{profile.username}</h2>
          <div className='d-flex flex-column my-4'>
          <input className='m-3' type="text" value={profile.username} name='username' />
          <input  className=" m-3"type="text" value={profile.userImage} />
          <button  className='btn btn-primary m-3'>Update</button>
          </div>
         
        </div>
      ) :
        (<p>Loadin .. </p>)}

    </div>
  )
}

export default Profile