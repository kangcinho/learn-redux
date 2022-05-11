import { createSlice } from "@reduxjs/toolkit";
import usersData from "./FakerUser"

var userForm = {
  id:0,
  name:"",
  username:""
}

export const users = createSlice({
  name:"users",
  initialState: {users: [], userForm:userForm},
  reducers: {
    onPost: (state, action) => {
      console.log("onPost");
      const input = {
        id: Date.now(),
        name: action.payload.name,
        username: action.payload.username
      }
      state.users.push(input);
    },
    onPut: (state, action) => {
      console.log("onPut");
      state.users = state.users.map((user) => {
        if(user.id === action.payload.id){
          user.name = action.payload.name;
          user.username = action.payload.username;
        }
        return user;
      })
    },
    onDelete: (state, action) => {
      console.log("onDelete");
      state.users = state.users.filter((user) => user.id !== action.payload.id)
    },
    onEdit: (state, action) => {
      console.log("onEdit", action.payload.id);
      state.userForm =  state.users.find((user) => user.id === action.payload.id);
    },
    onIndex: (state, action) => {
      console.log("onIndex");
      state.users = usersData;
    },
    onClearForm: (state, action) => {
      state.userForm = {
        id:0,
        name:"",
        username:""
      };
    }
  }
})

export const {onPost, onPut, onDelete, onEdit, onIndex, onClearForm} = users.actions;
export default users.reducer;