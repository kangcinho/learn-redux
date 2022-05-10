import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";

import {onPost, onPut, onClearForm} from "../../../Features/Users/UserReducer"

const UserForm = () => {
  console.log("UserForm");
  const dispatch = useDispatch();
  const userForm = useSelector((state) => state.users.userForm);
  const [name, sName] = useState(userForm.name);
  const [username, sUsername] = useState(userForm.username);

  useEffect(() => {
    setName(userForm.name);
    setUsername(userForm.username);
  },[userForm.name, userForm.username])

  const setName = (value) =>{
    sName((prev) => value);
  }
  const setUsername = (value) =>{
    sUsername((prev) => value);
  }

  const save = () => {
    const user = {
      id: userForm.id,
      name: name,
      username: username
    }

    if(userForm.id === 0){
      dispatch(onPost(user));
    }else{
      dispatch(onPut(user));
    }
    dispatch(onClearForm());
  }


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