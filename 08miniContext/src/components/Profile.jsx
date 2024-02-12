import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const {user} = useContext(UserContext);

  if(!user) return <h1 className="absolute bottom-60 left-auto">Not Logged In</h1>
  return (
    <div className="absolute bottom-60 left-auto">Profile : {user.username}</div>
  )
}

export default Profile