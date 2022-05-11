import React from "react"

import UserFormLogic from "./UserFormLogic";
const UserForm = () => {
  console.log("UserForm");
  const {name, setName, username, setUsername, save} = UserFormLogic();

  return (
    <div className="card mt-2">
      <div className="card-header">User Form</div>
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" name="name"  id="name" value={name} onChange={(e) => { setName(e.target.value)}}/>
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" name="username"  id="username" value={username} onChange={(e) => { setUsername(e.target.value)}}/>
        </div>
        <button className="btn btn-primary mt-2" onClick={save}>Save</button>
      </div>
    </div>
  )
}

export default UserForm;