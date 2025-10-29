import React, { useEffect, useState } from 'react'

function Suggestion() {

  const [profile, setProfile] = useState(null)
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {

    fetch('http://localhost:3000/Profile')
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.log(err))
  }, [])

  fetch('http://localhost:3000/Suggestion')
    .then((res) => res.json())
    .then((data) => setSuggestions(data))
    .catch((err) => console.log(err))



  return (
    <div>
      {/* Profile Section */}
      {profile ? (
        <div className="m-4 d-flex ">
          <img className="rounded-circle dp" src={profile.userImage} alt="insta profile" />
          <h6 className="mt-1">{profile.username}</h6>
          <h6 className="text-primary ms-2 mt-1">Switch</h6>
        </div>
      ) : (
        "Loading profile..."
      )}


      <div className="d-flex m-3">
        <h5>Suggested for you </h5>
        <b className='ms-3'>See all </b>
      </div>
      {suggestions.length > 0 ? (
        suggestions.map((suggestion) => (
          <div className="d-flex justify-content-between align-items-center m-3" key={suggestion.id}>
            <div className="d-flex align-items-center">
              <img className="rounded-circle dps " src={suggestion.userImage} alt="suggestion profile" />
              <h6 className="ms-3">{suggestion.username}</h6>
            </div>
            <button className="btn btn-primary btn-sm">Follow</button>
          </div>
        ))
      ) : (
        "Loading suggestions..."
      )}
    </div>
  )
}

export default Suggestion 