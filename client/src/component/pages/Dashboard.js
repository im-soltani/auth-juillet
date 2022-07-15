import React from 'react'
import {useSelector} from "react-redux"

function Dashboard() {
    const user=useSelector((state)=>state.authReducer.user)
    console.log(user,"hello world")

  return (
    <div>
        <h1>{user && user.name}</h1>
        <h5>{user && user.email}</h5>
    </div>
  )
}

export default Dashboard