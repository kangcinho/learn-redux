import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import User from "./Page/User/User"
import UserReducer from "./Features/Users/UserReducer";

const store = configureStore({
  reducer:{
    users: UserReducer
  }
})

const App = () => {
  return (
    <>
      <Provider store={store}>
        <User />
      </Provider>
    </>
  )
}
export default App;

