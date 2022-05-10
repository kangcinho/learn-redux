import React, {useEffect} from "react";
import { useDispatch } from "react-redux";

import {onIndex} from "../../Features/Users/UserReducer"

import UserForm from "./UserForm/UserForm.";
import UserList from "./UserList/UserList";

const User = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onIndex());
  },[dispatch])

  return (
    <div className="container">
      <UserForm/>
      <UserList/>
    </div>
  )
}

export default User;