import {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";

import {onPost, onPut, onClearForm} from "../../../Features/Users/UserReducer"

const UserFormLogic = () => {
  
  const dispatch = useDispatch();
  const userForm = useSelector((state) => state.users.userForm);
  const [name, sName] = useState(userForm.name);
  const [username, sUsername] = useState(userForm.username);
  useEffect(() => {
    console.log("useEffect User Form")
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
      pOnClearForm();
    }else{
      dispatch(onPut(user));
      dispatch(onClearForm());
    }
  }

  const pOnClearForm = () => {
    setName("");
    setUsername("");
  }

  return {
    name,
    setName,
    username,
    setUsername,
    save
  }
}

export default UserFormLogic;