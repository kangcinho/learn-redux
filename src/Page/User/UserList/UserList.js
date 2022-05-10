import { useSelector, useDispatch } from "react-redux";

import {onEdit, onDelete} from "../../../Features/Users/UserReducer"

const UserList = () => {
  const users = useSelector((state) => state.users.users)
  const dispatch = useDispatch();

  if(users.length > 0) {
    return (
      <div className="card mt-2">
        <div className="card-header">Users List</div>
        <div className="card-body">
          <table className="table table-stripped">
            <thead className="text-center">
              <tr>
                <th>Id</th>
                <th>Nama</th>
                <th>Username</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => 
                <tr className="text-left" key={user.id}>
                  <td className="text-center">{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td className="text-end">
                    <div className="btn-group">
                      <div className="btn btn-warning" onClick={() => { dispatch(onEdit({id: user.id})) }}>Edit</div>
                      <div className="btn btn-danger" onClick={() => { dispatch(onDelete({id: user.id})) }}>Delete</div>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    )
  }else{
    return (
      <div className="card mt-2">
        <div className="card-header">Users List</div>
        <div className="card-body text-center">
          <h6>Data Not Found!</h6>
        </div>
      </div>
    )
  }
  
}

export default UserList;