import React, { useEffect, useState } from 'react'
import axios from 'axios'




function Profile() {
  const [profile, setprofile] = useState(null)


  useEffect(() => {
    axios.get('http://localhost:3000/Profile')
      .then(data => { setprofile(data.data); console.log(data) })
  }, [])

   function handleOnchange (e){
    setprofile((prev) => ({
      ...prev , [e.target.name] : e.target.value
    }) )

   }
     const handleUpdate = () =>{
      axios.put ('http://localhost:3000/Profile', profile)
      .then (console.log("updated") )
      .catch(err => console.log(err))
    }
  return (
    <div>
      {profile ? (
        <div className=' m-5 d-flex flex-column justify-content-center'>
          <img className='rounded-circle proflie-pic  ' src={profile.userImage} />
          <h2>{profile.username}</h2>
          <div className='d-flex flex-column my-4'>
          <input className='m-3' type="text" value={profile.username} name='username'  onChange={handleOnchange}/>
          <input  className=" m-3"type="text" value={profile.userImage} name='userImage'  onChange={handleOnchange}/>
          <button  className='btn btn-primary m-3' onClick={handleUpdate}>Update</button>
          </div>
         
        </div>
      ) :
        (<p>Loading .. </p>)}

    </div>
  )
}

export default Profile